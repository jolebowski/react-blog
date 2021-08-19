import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './components/Card';
import { getArticles } from './redux/reducers/articleReducer';
function App() {
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='capitalize md:uppercase text-center text-2xl text-blue-900'>
          Tous les articles
        </h1>
        <div className='container mt-5'>
          <div className='flex flex-wrap md:flex-wrap'>
            {articles.map((item) => {
              return (
                <Card key={item.id}>
                  <h1 className='uppercase tracking-wide text-sm text-indigo-600 font-bold mb-2'>
                    {item.title}
                  </h1>
                  <p className='text-blue-300 text-sm	'>{item.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
