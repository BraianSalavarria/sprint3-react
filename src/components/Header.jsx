import React from 'react'
import logo from '../assets/logo.png'
import carrito from '../assets/cesta-de-la-compra.png'
import useCart from '../hooks/useCart'
import { CiSun } from "react-icons/ci"
import { BsMoonStars } from "react-icons/bs"

function Header({ setIsOpenModal, setDarkMode }) {
  const onOpenModal = () => setIsOpenModal(true)
  const { totalItems } = useCart()

  return (
    <nav className="flex flex-row justify-between items-center bg-gray-900 text-white font-bold py-4 px-4">
      {/* Logo */}
      <div className="flex flex-row items-center gap-3">
        <img src={logo} alt="logo de la página" className="w-10 h-10 object-contain" />
        <span className="text-xl">CompraTuPeli</span>
      </div>

      {/* Controles (modo oscuro + carrito) */}
      <div className="flex flex-row items-center gap-3">
        {/* Botones modo oscuro */}
        <button
          className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg dark:hover:bg-zinc-500"
          onClick={() => setDarkMode('')}
        >
          <CiSun size={22} />
        </button>

        <button
          className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg dark:hover:bg-zinc-500"
          onClick={() => setDarkMode('dark')}
        >
          <BsMoonStars size={20} />
        </button>

        {/* Carrito */}
        <button
          className="bg-amber-400 rounded-full py-2 px-2 transition-transform hover:scale-105 cursor-pointer"
          onClick={onOpenModal}
        >
          <div className="flex flex-row justify-between items-center">
            <img src={carrito} className="w-6 h-6 mr-1" alt="carrito" />
            <div className="rounded-full bg-red-700 font-semibold text-white text-sm px-2 py-1">
              {totalItems}
            </div>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Header
