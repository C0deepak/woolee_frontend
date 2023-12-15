import React from 'react'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-zinc-500/[0.5]'><img src="/img/loader.gif" alt="" className='w-20 h-20'/></div>
  )
}

export default Loader