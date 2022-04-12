import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components

import Header from "./components/Header/NavBar/NavBar";
import Footer from './components/Footer/Footer';

// Pages

import ContactPage from './pages/Contact/Contact'
import HomePage from './pages/Home/HomeProducts'
import NotFound from './pages/ErrorPage/ErrorPage'
import DetailItem from './pages/ItemDetail/DetailPage';
import Cart from './pages/Cart/Cart';

// Context
import{ CartProvider } from './Context/CartContext';


function App() {
  return (

    //JSX

    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category/" element={<HomePage />} />
            <Route path="/:category/:id" element={<DetailItem />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;