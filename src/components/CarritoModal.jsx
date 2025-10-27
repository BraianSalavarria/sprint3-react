import React from 'react'
//import { useCart } from '../contexts/CartContext';
import CarritoCard from './CarritoCard';
import useCart from '../hooks/useCart';


const CarritoModal = ({ isOpenModal, setIsOpenModal }) => {
  
    const onCloseModal = () => setIsOpenModal(false);
    const {cart, totalPrice, clearCart} = useCart()



  if (!isOpenModal) return null;

  return (
    <div className="fixed inset-0 z-50  bg-black/60 backdrop-blur-sm p-4 flex flex-col gap-2 items-center overflow-y-auto min-h-screen">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col items-center dark:bg-zinc-700">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Mi Carrito  🛒🔥</h1>

      {
        cart.length === 0 ? (
          <p className='font-semibold dark:text-white'>No hay Peliculas en tu Carrito 🛒🔥</p>
        ):
        (
          cart.map((item) =>(

            <CarritoCard key={item.id} name={item.name} price={item.price} quantity={item.quantity} img={item.img} id={item.id} subtotal={item.subtotal} />
        
          ))
          
        )
      }
        <p className="text-lg font-semibold text-gray-800 dark:text-white">Monto total: {totalPrice}</p>
       <div>
        <button
          onClick={clearCart}
          className="mt-5 w-full rounded-2xl bg-amber-400 py-2 font-semibold transition-transform hover:scale-105 text-sm sm:text-base">
          Vaciar Carrito 🛒❌
        </button>
        <button
          onClick={onCloseModal}
          className="mt-5 w-full rounded-2xl bg-amber-400 py-2 font-semibold transition-transform hover:scale-105 text-sm sm:text-base">
          Cerrar
        </button>
      </div>  
      
      
      </div>
    </div>
  );
};

export default CarritoModal;
