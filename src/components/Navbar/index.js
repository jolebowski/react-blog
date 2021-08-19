import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-800 p-6 mb-3'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-bold text-xl'>BLOG</span>
      </div>
      <div className='w-full block flex-grow sm:flex sm:items-center sm:w-auto'>
        <div className='text-sm sm:flex-grow'>
          <Link
            to='/'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Accueil
          </Link>
          <Link
            to='/addArticle'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Ajouter article
          </Link>
        </div>
      </div>
    </nav>
  );
}
