import Card from './components/Card';
function App() {
  return (
    <div className='container'>
      <h1 className='capitalize md:uppercase text-center text-2xl text-blue-900'>
        Tous les articles
      </h1>
      <div className='container mt-5'>
        <div className='flex flex-wrap md:flex-wrap'>
          <Card>
            <h1>On est dans la card</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
