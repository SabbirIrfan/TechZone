import { Col } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";

export const handleChange = (increaseItem, value, setCartItem, cartItem) => {
  if (increaseItem.amount === 1 && value === -1) return;
  const newCartItem = cartItem.map((item) => {
    if (item.id === increaseItem.id) {
      item.amount += value;
    }
    return item; // Return the modified item
  });

  setCartItem(newCartItem);
};

export const handleRemove = (id, cartItem, setCartItem, setCartSize) => {
  const isConfirmed = window.confirm("Are you sure you want to remove this item from your cart?");
  if (isConfirmed) {
    const arr = cartItem.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(arr));
    setCartItem(arr);
    setCartSize(arr.length);
    // handlePrice();
  }
 
};

export const handlePrice = (cartItem, setPrice) => {
  let ans = 0;
  cartItem.map((item) => (ans += item.amount * item.price));
  setPrice(ans);
};

export const searchProducts = (searchWith, products) => {
  // console.log(searchWith + searchWith.length);
  let searchedProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchWith.toLowerCase()) ||
      product.catagory.toLowerCase().includes(searchWith.toLowerCase())
  );

  if (searchWith.length === 0) {
    console.log(1);
    return products;
  } else {
    console.log(searchedProducts)
    return searchedProducts;
  }
};

export const renderRatingStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};
