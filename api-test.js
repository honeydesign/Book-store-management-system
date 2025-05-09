import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

// Configuration
const API_BASE_URL = "http://localhost:3000/api";
let authCookie = null;
let testUserId = null;
let testBookId = null;
let testPurchaseId = null;
let testWishlistId = null;

// TODO: NDRYSHOJI KTO !!
// Test user data
const testUser = {
  email: `a.dervishaj21@epoka.edu.al`,
  password: "AlviDervishaj1!@_",
  full_name: "Alvi Dervishaj",
  is_author: true,
  is_seller: true,
};
// Deri ktu

// Test book data
const testBook = {
  title: "Test Book",
  description: "This is a test book",
  price: 19.99,
  stock: 50,
};

// Helper function for API requests
async function apiRequest(endpoint, method = "GET", body = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (authCookie) {
    headers["Cookie"] = authCookie;
  }

  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    // Save auth cookie if present
    const setCookie = response.headers.get("set-cookie");
    if (setCookie) {
      authCookie = setCookie;
    }

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error(`Error in ${method} ${endpoint}:`, error);
    return { status: 500, data: { success: false, error: error.message } };
  }
}

// Test runner
async function runTests() {
  console.log("🚀 Starting API Tests\n");

  // Authentication Tests
  console.log("📝 Authentication Tests");
  await testSignup();
  await testLogin();

  // User Tests
  console.log("\n👤 User Tests");
  await testGetUser();
  await testUpdateUser();

  // Book Tests
  console.log("\n📚 Book Tests");
  await testCreateBook();
  await testGetAllBooks();
  await testGetBookById();
  await testUpdateBook();

  // Wishlist Tests
  console.log("\n💖 Wishlist Tests");
  await testAddToWishlist();
  await testGetWishlist();
  await testRemoveFromWishlist();

  // Purchase Tests
  console.log("\n🛒 Purchase Tests");
  await testCreatePurchase();
  await testGetAllPurchases();
  await testGetPurchaseById();
  await testCancelPurchase();

  // Cleanup Tests
  console.log("\n🧹 Cleanup Tests");
  await testDeleteBook();
  await testLogout();
  await testDeleteUser();

  console.log("\n✅ All tests completed!");
}

// Authentication Tests
async function testSignup() {
  console.log("  Testing signup...");
  const { status, data } = await apiRequest("/auth/signup", "POST", testUser);

  if (status === 201 && data.success) {
    console.log("  ✅ Signup successful");
    testUserId = data.data.id;
  } else {
    console.log(
      `  ❌ Signup failed: ${data.error || "Unknown error"} ${JSON.stringify(
        data
      )}`
    );
  }
}

async function testLogin() {
  console.log("  Testing login...");
  const { status, data } = await apiRequest("/auth/login", "POST", {
    email: testUser.email,
    password: testUser.password,
  });

  if (status === 200 && data.success) {
    console.log("  ✅ Login successful");
  } else {
    console.log(`  ❌ Login failed: ${data.error || "Unknown error"}`);
  }
}

async function testLogout() {
  console.log("  Testing logout...");
  const { status, data } = await apiRequest("/auth/logout", "POST");

  if (status === 200 && data.success) {
    console.log("  ✅ Logout successful");
    authCookie = null;
  } else {
    console.log(`  ❌ Logout failed: ${data.error || "Unknown error"}`);
  }
}

// User Tests
async function testGetUser() {
  console.log(`  Testing get user (ID: ${testUserId})...`);
  const { status, data } = await apiRequest(`/users/${testUserId}`);

  if (status === 200 && data.success) {
    console.log("  ✅ Get user successful");
  } else {
    console.log(`  ❌ Get user failed: ${data.error || "Unknown error"}`);
  }
}

async function testUpdateUser() {
  console.log(`  Testing update user (ID: ${testUserId})...`);
  const { status, data } = await apiRequest(`/users/${testUserId}`, "PATCH", {
    full_name: "Updated Test User",
  });

  if (status === 200 && data.success) {
    console.log("  ✅ Update user successful");
  } else {
    console.log(`  ❌ Update user failed: ${data.error || "Unknown error"}`);
  }
}

async function testDeleteUser() {
  console.log(`  Testing delete user (ID: ${testUserId})...`);

  // Login again if needed
  if (!authCookie) {
    await testLogin();
  }

  const { status, data } = await apiRequest(`/users/${testUserId}`, "DELETE");

  if (status === 200 && data.success) {
    console.log("  ✅ Delete user successful");
  } else {
    console.log(`  ❌ Delete user failed: ${data.error || "Unknown error"}`);
  }
}

// Book Tests
async function testCreateBook() {
  console.log("  Testing create book...");
  const { status, data } = await apiRequest("/books", "POST", testBook);

  if (status === 201 && data.success) {
    console.log("  ✅ Create book successful");
    testBookId = data.data.id;
  } else {
    console.log(`  ❌ Create book failed: ${data.error || "Unknown error"}`);
  }
}

async function testGetAllBooks() {
  console.log("  Testing get all books...");
  const { status, data } = await apiRequest("/books");

  if (status === 200 && data.success) {
    console.log(
      `  ✅ Get all books successful (${data.data.length} books found)`
    );
  } else {
    console.log(`  ❌ Get all books failed: ${data.error || "Unknown error"}`);
  }
}

async function testGetBookById() {
  console.log(`  Testing get book by ID (ID: ${testBookId})...`);
  const { status, data } = await apiRequest(`/books/${testBookId}`);

  if (status === 200 && data.success) {
    console.log("  ✅ Get book by ID successful");
  } else {
    console.log(`  ❌ Get book by ID failed: ${data.error || "Unknown error"}`);
  }
}

async function testUpdateBook() {
  console.log(`  Testing update book (ID: ${testBookId})...`);
  const { status, data } = await apiRequest(`/books/${testBookId}`, "PATCH", {
    title: "Updated Test Book",
    price: 24.99,
  });

  if (status === 200 && data.success) {
    console.log("  ✅ Update book successful");
  } else {
    console.log(`  ❌ Update book failed: ${data.error || "Unknown error"}`);
  }
}

async function testDeleteBook() {
  console.log(`  Testing delete book (ID: ${testBookId})...`);
  const { status, data } = await apiRequest(`/books/${testBookId}`, "DELETE");

  if (status === 200 && data.success) {
    console.log("  ✅ Delete book successful");
  } else {
    console.log(`  ❌ Delete book failed: ${data.error || "Unknown error"}`);
  }
}

// Wishlist Tests
async function testAddToWishlist() {
  console.log("  Testing add to wishlist...");

  // First get an existing book ID if we don't have one
  if (!testBookId) {
    const { data } = await apiRequest("/books");
    if (data.success && data.data.length > 0) {
      testBookId = data.data[0].id;
    } else {
      console.log("  ❌ No books available for wishlist test");
      return;
    }
  }

  const { status, data } = await apiRequest("/wishlist", "POST", {
    book_id: testBookId,
  });

  if (status === 201 && data.success) {
    console.log("  ✅ Add to wishlist successful");
    testWishlistId = data.data.id;
  } else {
    console.log(
      `  ❌ Add to wishlist failed: ${data.error || "Unknown error"}`
    );
  }
}

async function testGetWishlist() {
  console.log("  Testing get wishlist...");
  const { status, data } = await apiRequest("/wishlist");

  if (status === 200 && data.success) {
    console.log(
      `  ✅ Get wishlist successful (${data.data.length} items found)`
    );
  } else {
    console.log(`  ❌ Get wishlist failed: ${data.error || "Unknown error"}`);
  }
}

async function testRemoveFromWishlist() {
  console.log(`  Testing remove from wishlist (ID: ${testWishlistId})...`);
  const { status, data } = await apiRequest(
    `/wishlist/${testWishlistId}`,
    "DELETE"
  );

  if (status === 200 && data.success) {
    console.log("  ✅ Remove from wishlist successful");
  } else {
    console.log(
      `  ❌ Remove from wishlist failed: ${data.error || "Unknown error"}`
    );
  }
}

// Purchase Tests
async function testCreatePurchase() {
  console.log("  Testing create purchase...");

  // First get an existing book ID if we don't have one
  if (!testBookId) {
    const { data } = await apiRequest("/books");
    if (data.success && data.data.length > 0) {
      testBookId = data.data[0].id;
    } else {
      console.log("  ❌ No books available for purchase test");
      return;
    }
  }

  const { status, data } = await apiRequest("/purchased", "POST", {
    book_id: testBookId,
    quantity: 1,
  });

  if (status === 201 && data.success) {
    console.log("  ✅ Create purchase successful");
    testPurchaseId = data.data.id;
  } else {
    console.log(
      `  ❌ Create purchase failed: ${data.error || "Unknown error"}`
    );
  }
}

async function testGetAllPurchases() {
  console.log("  Testing get all purchases...");
  const { status, data } = await apiRequest("/purchased");

  if (status === 200 && data.success) {
    console.log(
      `  ✅ Get all purchases successful (${data.data.length} purchases found)`
    );
  } else {
    console.log(
      `  ❌ Get all purchases failed: ${data.error || "Unknown error"}`
    );
  }
}

async function testGetPurchaseById() {
  console.log(`  Testing get purchase by ID (ID: ${testPurchaseId})...`);
  const { status, data } = await apiRequest(`/purchased/${testPurchaseId}`);

  if (status === 200 && data.success) {
    console.log("  ✅ Get purchase by ID successful");
  } else {
    console.log(
      `  ❌ Get purchase by ID failed: ${data.error || "Unknown error"}`
    );
  }
}

async function testCancelPurchase() {
  console.log(`  Testing cancel purchase (ID: ${testPurchaseId})...`);
  const { status, data } = await apiRequest(
    `/purchased/${testPurchaseId}`,
    "DELETE"
  );

  if (status === 200 && data.success) {
    console.log("  ✅ Cancel purchase successful");
  } else {
    console.log(
      `  ❌ Cancel purchase failed: ${data.error || "Unknown error"}`
    );
  }
}

// Run the tests
runTests().catch((error) => {
  console.error("Test suite failed:", error);
});
