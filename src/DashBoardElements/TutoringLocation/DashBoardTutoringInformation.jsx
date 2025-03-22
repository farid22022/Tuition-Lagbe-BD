import React, { useState } from 'react';

const DashBoardTutoringInformation = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Sample data structure
  const educationData = {
    'Bangladesh': {
      universities: {
        'Khulna University': ['CSE', 'EEE', 'Civil Engineering', 'Architecture'],
        'Dhaka University': ['Economics', 'Physics', 'Chemistry', 'Mathematics'],
        'BUET': ['Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering']
      }
    },
    'India': {
      universities: {
        'IIT Delhi': ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering'],
        'University of Delhi': ['Arts', 'Commerce', 'Science']
      }
    }
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedUniversity('');
    setSelectedDepartment('');
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
    setSelectedDepartment('');
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
            {Object.keys(educationData).map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>University</label>
          <select
            value={selectedUniversity}
            onChange={handleUniversityChange}
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            disabled={!selectedCountry}
            required
          >
            <option value="">Select University</option>
            {selectedCountry && Object.keys(educationData[selectedCountry].universities).map(university => (
              <option key={university} value={university}>{university}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Right Column */}
      <div className='flex-1 space-y-6'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Department</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            disabled={!selectedUniversity}
            required
          >
            <option value="">Select Department</option>
            {selectedUniversity && educationData[selectedCountry].universities[selectedUniversity].map(department => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashBoardTutoringInformation;