// import logo from './logo.svg';
import './App.css';
import Navbar from './components/appBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div> 
       <Navbar />
       <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
