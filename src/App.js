//Componentes
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
//Pages
import Home from './pages/Home/HomeProducts';
import NotFound from './pages/ErrorPage/ErrorPage';
import ItemDetailPage from './pages/ItemDetail/DetailPage';
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
              <Route path='/' element={<Home/>}/>
              <Route path="/:category/" element={<Home />} />
              <Route path='/category/:id' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      
    </div>
  );
}

export default App;