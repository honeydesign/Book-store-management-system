# Book Store API Test Script

This script tests all the endpoints of the Book Store API to ensure they're working correctly.

## Prerequisites

- Node.js 18 or higher
- The Book Store API running on `http://localhost:3000`

## Installation

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

## Usage

1. Make sure your Book Store API is running on `http://localhost:3000`
2. Run the test script:
   \`\`\`
   npm test
   \`\`\`

## What the Script Tests

The script tests the following API endpoints:

### Authentication
- Sign up a new user
- Log in with the new user
- Log out

### User Operations
- Get user profile
- Update user profile
- Delete user account

### Book Operations
- Create a new book
- Get all books
- Get a specific book by ID
- Update a book
- Delete a book

### Wishlist Operations
- Add a book to wishlist
- Get user's wishlist
- Remove a book from wishlist

### Purchase Operations
- Purchase a book
- Get all purchases
- Get a specific purchase by ID
- Cancel a purchase

## Test Flow

The script creates a test user with both author and seller roles, then performs all operations using this user. At the end, it cleans up by deleting the created resources.

## Customization

You can modify the `API_BASE_URL` constant at the top of the script if your API is running on a different URL.
