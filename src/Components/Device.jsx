import React from 'react'

const Device = () => {
  return (
    <div className="bg-black text-white text-xs fixed bottom-0 px-4 py-2 rounded-2xl m-2">
      <h1 className="hidden xl:block lg:hidden md:hidden sm:hidden">X-large</h1>
      <h1 className="hidden xl:hidden lg:block md:hidden sm:hidden">Large</h1>
      <h1 className="hidden xl:hidden lg:hidden md:block sm:hidden">Medium</h1>
      <h1 className="hidden xl:hidden lg:hidden md:hidden sm:block">Small</h1>
      <h1 className="block xl:hidden lg:hidden md:hidden sm:hidden">X-Small</h1>
    </div>
  );
}

export default Device