import React, { useState } from 'react';
import { Quiz } from './pages';
import { BG } from './asset';


const App = () => {


  return (
    <div className='relative max-w-xl mx-auto min-h-screen bg-slate-100'>

      <div className='z-10 absolute top-0 inset-x-0'>
        <Quiz />
      </div>

      <div className='z-0 opacity-50'>
        <img src={BG} className='object-fill' />
      </div>


    </div>
  )
}

export default App;