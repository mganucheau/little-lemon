import React, { useState } from 'react';
import restaurantTableImage from '../images/restaurant-table.jpg'; // Ensure you have an image at this path

const Booking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking has been confirmed!');
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-20 py-20 bg-white rounded-lg overflow-hidden ">
      <div className="mx-auto md:w-1/2 bg-cover rounded-lg" style={{ backgroundImage: `url(${restaurantTableImage})` }}>
      </div>
      <div className="  m-auto  md:w-1/3 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="book-date" className="block text-lg font-semibold">Choose Date:</label>
            <input id='book-date' type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-gray-200 p-3 rounded-md cursor-pointer" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="book-time" className="block text-lg font-semibold">Choose Time:</label>
            <select id="book-time" value={time} onChange={e => setTime(e.target.value)} className="w-full bg-gray-200 p-3 rounded-md cursor-pointer" required>
              <option value="">Select a Time</option>
              {["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="book-guests" className="block text-lg font-semibold">Number of Guests:</label>
            <input type="number" id='book-guests' min={1} value={guests} onChange={e => setGuests(e.target.value)} className="w-full bg-gray-200 p-3 rounded-md cursor-pointer" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="book-occasion" className="block text-lg font-semibold">Occasion:</label>
            <select id="book-occasion" value={occasion} onChange={e => setOccasion(e.target.value)} className="w-full bg-gray-200 p-3 rounded-md cursor-pointer" required>
              <option value="">Special Occasion?</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <div className="text-end">
            <button type="submit" className="btn">Confirm</button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Booking;
