import React from "react";
import useCart from "../hooks/useCart";

const CarritoCard = ({ name, price, quantity, img, id, subtotal }) => {
  const { removeFromCart, decreaseFromCart } = useCart();

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-gray-600 shadow-xl hover:shadow-lg transition-all duration-300 mb-3 h-32 w-full max-w-[500px]">
      
      {/* Imagen */}
      <div className="shrink-0">
        <img
          src={img}
          alt={name}
          className="w-24 h-24 object-cover rounded-xl border border-gray-200"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between h-full w-48">
        <p
          className="text-lg font-semibold text-gray-800 truncate"
          title={name}
        >
          {name}
        </p>

        <div className="text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-700">Precio:</span> ${price}
          </p>
          <p>
            <span className="font-medium text-gray-700">Cantidad:</span> {quantity}
          </p>
          <p>
            <span className="font-medium text-gray-700">Subtotal:</span> ${subtotal}
          </p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          onClick={() => removeFromCart(id)}
          className="p-2 rounded-full hover:bg-red-200 transition-colors"
          title="Eliminar del carrito"
        >
          🗑️
        </button>
        <button
          onClick={() => decreaseFromCart(id)}
          className="p-2 rounded-full hover:bg-red-200 transition-colors"
          title="Disminuir cantidad"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CarritoCard;
