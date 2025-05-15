export type Profile = {
  id: string
  full_name: string | null
  email: string
  created_at: string
  updated_at: string
}

export type Book = {
  id: string
  title: string
  author: string
  description: string | null
  price: number
  image_url: string | null
  stock_quantity: number
  created_at: string
  updated_at: string
}

export type Purchase = {
  id: string
  user_id: string
  book_id: string
  quantity: number
  purchase_date: string
  total_price: number
}

export type Wishlist = {
  id: string
  user_id: string
  book_id: string
  added_at: string
}
