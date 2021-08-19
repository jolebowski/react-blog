import React from 'react';

export default function AddArticle() {
  return (
    <>
      <div className='container mx-auto my-20 w-1/3 border border-blue-500 bg-white'>
        <div className='p-5 space-y-5 shadow-xl'>
          <h4 className='text-center text-3xl'>Ajouter article</h4>

          <form>
            <div className='grid grid-cols-2 gap-5'>
              <input
                type='text'
                class='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2'
                placeholder='Titre'
              />
              <textarea
                cols='10'
                rows='5'
                className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2'
                placeholder='Ecrivez votre article...'
              ></textarea>
            </div>
            <input
              type='submit'
              value='Ajouter article'
              className='focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full'
            />
          </form>
        </div>
      </div>
    </>
  );
}
