import './App.css'
import Header from "./components/Header/NavBar/NavBar";
import TitleMain from './components/Main/TextMain/TitleMain';
import ListProducts from './components/Main/ItemList/ItemList';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <Header/>
      <TitleMain title={'En esta tienda encontrarás las camisetas de Lionel Messi'}/>
      <ListProducts/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;