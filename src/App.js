//Componentes
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CartPage from './pages/Cart/Cart';
//Pages
import Home from './pages/Home/HomeProducts';
import NotFound from './pages/ErrorPage/ErrorPage';
import DetailPage from './pages/ItemDetail/DetailPage';
import Contact from './pages/Contact/Contact'
//Estilos
import './App.css';
//context
import {CartProvider} from './Context/CartContext';


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