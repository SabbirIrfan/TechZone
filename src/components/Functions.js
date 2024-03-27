
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
