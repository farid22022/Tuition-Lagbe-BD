import React, { useState } from 'react';

const DashBoardRegistration = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Sample data structure
  const countryData = {
    'Bangladesh': {
      cities: {
        'Dhaka': ['Mirpur', 'Dhanmondi', 'Gulshan', 'Uttara'],
        'Khulna': ['Khan Jahan Ali', 'Sonadanga', 'Daulatpur', 'Rupsha'],
        'Chittagong': ['Agrabad', 'Double Mooring', 'Panchlaish', 'Kotwali']
      }
    },
    'India': {
      cities: {
        'Delhi': ['Connaught Place', 'Chanakyapuri', 'Karol Bagh', 'Dwarka'],
        'Mumbai': ['Colaba', 'Bandra', 'Andheri', 'Juhu']
      }
    }
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity('');
    setSelectedLocation('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedLocation('');
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row gap-8 p-6 max-w-4xl mx-auto'>
      {/* Left Column */}
      <div className='flex-1 space-y-6'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Country</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          >
            <option value="">Select Country</option>
            {Object.keys(countryData).map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>City</label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            disabled={!selectedCountry}
            required
          >
            <option value="">Select City</option>
            {selectedCountry && Object.keys(countryData[selectedCountry].cities).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Right Column */}
      <div className='flex-1 space-y-6'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Living Address</label>
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            disabled={!selectedCity}
            required
          >
            <option value="">Select Location</option>
            {selectedCity && countryData[selectedCountry].cities[selectedCity].map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Preferable Location</label>
          <select
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            disabled={!selectedCity}
            required
          >
            <option value="">Select Preferred Location</option>
            {selectedCity && countryData[selectedCountry].cities[selectedCity].map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRegistration;