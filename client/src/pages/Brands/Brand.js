import React from 'react'

import { Outlet } from 'react-router';

const Brand = () => {    
  return (
    <div className='my-3'>
        <div className='w-100 my-3 text-center'>
            <h3>Brand</h3>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Brand