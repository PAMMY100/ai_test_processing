import React from 'react'

const Header = () => {
  return (
    <div className='fixed right-12 md:right-[15%] h-[2%] w-[80%] md:w-[70%] md:h-[5%] rounded-2xl border-2 border-blue-100 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 md:gap-14 text-center p-9 mx-auto font-serif'>
        <h1 className='sm:text-xl text-2xl font-bold mb-4 md:text-4xl animate-bounce bg-gradient-to-r from-blue-100 via-blue-300 to-blue-700 bg-clip-text text-transparent'>Ai Text Processor</h1>
    </div>
  )
}

export default Header