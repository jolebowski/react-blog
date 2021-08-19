import React from 'react';

export default function index({ children }) {
  return (
    <div className='flex-1 text-blue-700 text-center bg-white px-5 py-5 m-2 rounded'>
      <div>{children}</div>
      <a
        href='#'
        className='block mt-1 text-lg leading-tight front-semibold text-gray-900'
      >
        TEST
      </a>
    </div>
  );
}
