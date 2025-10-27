import React, { createContext, useEffect, useState } from 'react'


//creamos el contexto
const CartContext = createContext()

//creamos el provider - Componente que envuelve a todos los componentes, es decir un proveedor de contexto
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
    try {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error('Error al cargar el carrito:', error);
        return [];
    }
});




  //Actualizacion del carrito al cambiar el estado - dependendencia
  useEffect( ()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])



    //funcion para agregar iteam al carrito
   const addToCart = (product) => {

    setCart((prevCart) => {

      const itemInCart = prevCart.find((item) => item.id === product.id);
      
      if (itemInCart) {
        // si ya existe, aumenta la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1)*item.price } //saque el tofixed
            : item
        );
      }
      // si no existe, lo agrega con cantidad 1
      return [...prevCart, { ...product, quantity: 1, subtotal: product.price }]; //para verificar nomas, esta mal
    });
  };

  //funcion para restar items al carrito

  const decreaseFromCart = (id) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === id);
      if (!itemInCart) return prevCart; // si no existe, no hace nada

      if (itemInCart.quantity > 1) {
        // resta cantidad
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1, subtotal: ((item.quantity - 1)*item.price) } //saque el to fixed
            : item
        );
      }

      // si la cantidad llega a 0, elimina el producto
      return prevCart.filter((item) => item.id !== id);
    });
  };


  //Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //vaciar el carrito
  const clearCart = () => setCart([])

  // cantital total de productos
  const totalItems = cart.reduce( (acc, item) => acc + item.quantity, 0)
   
  //monto total
   const totalPrice = cart.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <CartContext.Provider

    value={{cart, addToCart, removeFromCart,clearCart,totalItems, decreaseFromCart,totalPrice}}>
        
        {children}

    </CartContext.Provider>
  )

}

  //custom hook para usarlo
 // export const useCart = () =>{ 
   // return useContext(CartContext)
  //}

export default CartContext;

