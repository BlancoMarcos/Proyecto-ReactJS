import './App.css'
import Header from "./components/Header/NavBar/NavBar";
import TitleMain from './components/Main/TitleMain/TitleMain';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer'
import ListProduct from './components/Main/ListProduct/ListProduct'

function App() {
  return (
    <div>
      <Header/>
      <TitleMain title={<h2>En esta tienda encontrará las camisetas de Lionel Messi</h2>}/>
      <ListProduct/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;