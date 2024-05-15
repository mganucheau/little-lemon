import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Booking from './Booking';
import bannerImg from '../images/greek food.jpg';

const Hero = () => {
  const Banner = () => (
    <section className='banner max-width-5xl py-10 px-4 text-white'>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <h1 className="title text-5xl mb-4">Little Lemon</h1>
          <h3 className="mb-1 text-3xl font-bold  mb-4">Chicago</h3>
          <p className="mb-1 text-xl me-4 font-extralight ">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking">
            <button className="btn duration-300 my-10 ">Reserve a table</button>
          </Link>
        </div>
        <img src={bannerImg} alt="Restaurant Food" className="md:w-96 md:h-96 rounded-lg md:ml-10 object-cover" />
      </div>
    </section>
  );

  return (
    <main>
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </main>
  );
};

export default Hero;
