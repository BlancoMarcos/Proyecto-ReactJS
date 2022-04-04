import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components

import Header from "./components/Header/NavBar/NavBar";

// Pages

import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import NotFound from './pages/ErrorPage/ErrorPage'
import DetailPage from './pages/DetailPage';


function App() {
  return (

    //JSX

    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<HomePage />} />
          <Route path="/productos/:id" element={<DetailPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;