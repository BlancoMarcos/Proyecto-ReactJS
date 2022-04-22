//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Componentes
import NavBar from './components/Header/NavBar/NavBar';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/HomeProducts';
import NotFound from './pages/ErrorPage/ErrorPage';
import DetailPage from './pages/ItemDetail/ItemDetail';
import Contact from './pages/Contact/Contact'
import CartPage from './pages/Cart/Cart';

//Context
import {CartProvider} from './Context/CartContext';

//Estilos
import './App.css';


function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/:category/' element={<Home/>}/>
              <Route path="/:category/:id" element={<DetailPage />}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      
    </div>
  );
}

export default App;