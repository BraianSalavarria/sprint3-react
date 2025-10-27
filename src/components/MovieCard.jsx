import React from 'react'
//import { useCart } from '../contexts/CartContext';
import useCart from '../hooks/useCart';

const MovieCard = ({ id, name, img, price, movie }) => {
const {addToCart} = useCart()
  

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-between gap-3 rounded-lg bg-gray-800 text-white 
                 p-4 shadow-md transition-transform hover:scale-105 sm:w-64 md:w-72 mx-auto"
    >
      <h1 className="text-lg sm:text-xl font-bold text-center">{name}</h1>
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className='font-semibold'>{price} <span className='text-green-600 font-bold'> $ </span></h3>
      <button
        onClick={() =>(addToCart(movie)) }
        className="mt-3 w-full rounded-2xl bg-amber-400 py-2 text-sm font-semibold 
                   transition-transform hover:scale-105 sm:text-base"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default MovieCard;
