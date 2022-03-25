import './App.css'
import Header from "./components/Header/NavBar/NavBar";
import ListProduct from "./components/Main/ListProduct/ListProduct"
import TitleMain from './components/Main/TitleMain/TitleMain';

function App() {
  return (
    <div>
      <Header/>
      <TitleMain title={<h2>En esta tienda encontrará las camisetas de Lionel Messi</h2>}/>
      <ListProduct/>
    </div>
  );
}

export default App;