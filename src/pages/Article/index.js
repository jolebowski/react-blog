import React from 'react';
import { useLocation } from 'react-router';

export default function Article() {
  const location = useLocation();
  return (
    <article className='container text-blue-900 leading-6'>
      <h2 className='transition-opacity duration-1500 delay-500 text-xl sm:text-2xl font-semibold text-black px-4 py-6 sm:px-6 pb-1 opacity-25'>
        {location.state.title}
      </h2>
      <dl className='transition-opacity duration-1500 delay-500 flex flex-wrap divide-y divide-gray-200 border-b border-blue-200'>
        <div class='w-full flex-none flex items-baseline px-4 sm:px-6 py-4'>
          <dt class='w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm tracking-wide'>
            Description
          </dt>
          <div class='italic text-sm sm:text-base'>{location.state.body}</div>
        </div>
      </dl>
    </article>
  );
}
