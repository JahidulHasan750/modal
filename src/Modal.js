import React, { useState } from 'react'
import imgi from './assets/annie-spratt--HO72hVHX10-unsplash.jpg'
const Modal = () => {
    const[showModal,setShowModal]= useState(false)
   
  return (
    <div  className='w-full h-screen flex justify-center absolute top-12' >
    <div className="App w-full h-screen flex items-center justify-center">
    <button className="px-2 py-1 rounded-md bg-green-500" onClick={()=>setShowModal(true)}>Modal</button>
    
    
        <div className= {showModal? 'fixed top-[35%]   border shadow-2xl':'hidden'}  >
            <img className='h-[400px] w-[400px] z-10' src={imgi}></img>
            <p className='absolute top-0 right-2 font-semibold text-2xl z-20' onClick={()=>setShowModal(false)}>X</p>
        </div>
    </div>
    </div>
  )
}

export default Modal