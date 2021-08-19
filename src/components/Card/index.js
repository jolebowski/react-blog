import React from 'react';

export default function index({ children }) {
  return (
    <div className='text-blue-700 text-center bg-white px-6 py-6 m-2 rounded'>
      <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold'>
        {children}
      </div>
      <a
        href='#'
        className='block mt-1 text-lg leading-tight front-semibold text-gray-900'
      >
        TEST
      </a>
    </div>
  );
}
