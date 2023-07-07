import React from 'react'
import Outline from './outline'

export default function Parent() {
  return (
    <>
      <div className="wrapper">
        <Outline />
        <div className="parent-content flex flex-col gap-4 items-center justify-center">
          <h1 className='text-6xl'>Oops!</h1>
          <h1 className='text-3xl'>Something Went Wrong</h1>
          <span>Error 404 Page Not Found</span>
        </div>
      </div>
    </>
  );
}
