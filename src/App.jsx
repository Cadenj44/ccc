// import logo from './logo.svg';
import './App.css';
import Navbar from './components/appBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <div> 
       <Navbar />
       <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
