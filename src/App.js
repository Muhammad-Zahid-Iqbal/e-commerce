import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes} from 'react-router-dom';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
        <Route exact path='/contactus' element={<ContactUs/>}></Route>
      </Routes>
    </div>
      );
}

export default App;
