 import React,{useContext} from "react"
 import CartContext  from "../contexts/CartContext"
 
 //custom hook para usarlo
   const useCart = () =>{ 
    return useContext(CartContext)
  }

  export default useCart;