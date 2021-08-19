import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function AddArticle() {
  const [article, setArticle] = useState({
    id: '',
    title: '',
    body: '',
  });

  const dispatch = useDispatch();
  // const titleArticle = useSelector((state) => ({
  //   ...state.articles,
  // }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADDARTICLE',
      payload: article,
    });
    setArticle({
      title: '',
      body: '',
    });
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains('inp-title')) {
      const newObject = { ...article, id: uuidv4(), title: e.target.value };
      setArticle(newObject);
    } else if (e.target.classList.contains('inp-body')) {
      const newObject = { ...article, body: e.target.value };
      setArticle(newObject);
    }
  };
  return (
    <>
      <div className='container mx-auto my-20 w-1/3 border border-blue-500 bg-white'>
        <div className='p-5 space-y-5 shadow-xl'>
          <h4 className='text-center text-3xl'>Ajouter article</h4>

          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-5'>
              <input
                type='text'
                className='inp-title border border-blue-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2'
                placeholder='Titre'
                value={article.title}
                onChange={handleInputs}
                required
              />
              <textarea
                cols='10'
                rows='5'
                className='inp-body border border-blue-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2'
                placeholder='Ecrivez votre article...'
                value={article.body}
                onChange={handleInputs}
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
