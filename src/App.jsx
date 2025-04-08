import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='main w-screen h-screen bg-black text-white flex flex-col items-center justify-center py-8 px-4'>
      <div className='text-center mb-6'>
        <h1 className='text-4xl font-bold mb-2 class capitalize'>AI image enchancer</h1>
        <p className='font-thin text-md text-gray-300 tracking-tighter'>Upload your image and watch it enhancing within a second 🔥</p>
      </div>
      <Home />
      <div className='text-center mt-6'>
        <h1 className='text-md font-thin text-gray-400'>Powered by PAi ∘ 𝛑</h1>
      </div>
    </div>
  )
}

export default App