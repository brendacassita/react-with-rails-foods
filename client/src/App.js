import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border'>
      <h1>Foods Menu App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/home'>Home</Link> - {' '}
          <Link to='/foods'>Foods</Link> - {' '}
          <Link to='/drinks'>Drinks</Link> - {' '}
          <Link to='/foods/new'>New Foods</Link> - {' '}

        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;
