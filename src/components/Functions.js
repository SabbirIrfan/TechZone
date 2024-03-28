
export const handleChange = (increaseItem, value, setCartItem,cartItem) => {
    if(increaseItem.amount===1 && value === -1) return ;
   const newCartItem =  cartItem.map((item) => {
        if (item.id === increaseItem.id) {
          item.amount += value;
        }
        return item; // Return the modified item
      })  

      setCartItem(newCartItem);
     
  } 
  
 export const handleRemove = (id,cartItem,setCartItem,setCartSize) => {
    const arr = cartItem.filter((item) => item.id !== id);
    localStorage.setItem("cart",JSON.stringify(arr));
    setCartItem(arr);
    setCartSize(arr.length)
    // handlePrice(); 
}

export const handlePrice = (cartItem,setPrice) => {
    let ans = 0;
    cartItem.map((item) => (
        ans += item.amount * item.price
    ))
    setPrice(ans);
}


export 

const searchProducts = (searchWith,products,setViewProducts) => {
  console.log(searchWith + searchWith.length);
  let searchedNotes = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchWith.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchWith.toLowerCase()) ||
      product.catagory.toLowerCase().includes(searchWith.toLowerCase())

  );


  if (searchWith.length === 0) {
    setViewProducts(products);
  } else setViewProducts(searchedNotes);
};
