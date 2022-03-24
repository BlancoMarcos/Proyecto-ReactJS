import './App.css'
import Header from "./components/Header/NavBar/NavBar";
import Body from  "./components/Main/TitleBody/TitleBody";
import ListProduct from "./components/Main/ListProduct/ListProduct"

function App() {
  return (
    <div>
      <Header/>
      <Body title={<h2>En esta tienda encontrará las camisetas de Lionel Messi</h2>}/>
      <ListProduct/>
    </div>
  );
}

export default App;