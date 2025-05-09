-- Function to create a purchase and update book stock in a transaction
CREATE OR REPLACE FUNCTION create_purchase(
  p_user_id UUID,
  p_book_id UUID,
  p_quantity INTEGER,
  p_total_price DECIMAL
) RETURNS VOID AS $$
BEGIN
  -- Insert purchase record
  INSERT INTO purchased (user_id, book_id, quantity, total_price)
  VALUES (p_user_id, p_book_id, p_quantity, p_total_price);
  
  -- Update book stock
  UPDATE books
  SET stock = stock - p_quantity
  WHERE id = p_book_id;
END;
$$ LANGUAGE plpgsql;
