import React from 'react'
import items from '../data'

const Menu = () => {
  return (
    <section className='max-w-5xl mx-auto my-20 px-4'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className="specials text-2xl font-semibold">This week's specials!</h2>
        <button className="btn">Order Menu</button>
      </div>

      {/* Menus */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {items.map(item => (
          <div key={item.id} className='card rounded-lg overflow-hidden shadow-lg flex flex-col justify-between h-full'>
            <img src={item.image} alt="Recipe portrait" className="w-full h-56 object-cover" />
            <div className='p-6 flex-1 flex flex-col justify-between'>
              <div>
                <h5 className="text-lg font-bold pb-2">{item.title}</h5>
                <p className="text-lg font-semibold pb-2">${item.price}</p>
                <p className='text-gray-700 my-2'>{item.description}</p>
              </div>
              <button className='btn text-sm duration-300 mt-4 self-start'>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu;
