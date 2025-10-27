import React, { useState} from 'react'
//import fondo from './assets/background.jpg'
import Header from './components/Header'
import CarritoModal from './components/CarritoModal'
import MovieList from './components/MovieList'
import { CartProvider } from './contexts/CartContext'

const App = () => {

  //listPelis seria el carrito de compras con todas las peliculas a comprar

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [darkMode, setDarkMode] = useState('')
  
   


  
  /*
  const bgImagen ={
  backgroundImage: `url(${fondo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center", // desplaza el foco
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  position: "relative"
}  
  */
  
  return (
    <div className={ ` ${darkMode ? 'dark': ''} overflow-hidden min-h-screen bg-white dark:bg-zinc-700 `}>
      <CartProvider> 
          <Header setIsOpenModal={setIsOpenModal} setDarkMode={setDarkMode} />
          <CarritoModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
          <MovieList/>
      </CartProvider>   
    
    </div>
  )
}

export default App
