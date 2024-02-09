import React from 'react'

interface Props{
  name: string
}

function ProductName({name}: Props) {
  return (
      <div className='flex flex-col'>
        <div>{name}</div>
        <div className='w-44 h-2 bg-white'></div>
      </div>
  )
}

export default ProductName
