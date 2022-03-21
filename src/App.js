import Header from "./components/Header/NavBar/NavBar";
import Body from  "./components/Main/Body/Body";
import Card from "./components/Main/Cards/Card"

function App() {
  return (
    <div>
      <Header/>
      <Body title={<h2>En esta tienda encontrará las camisetas de Lionel Messi</h2>}/>
      <Card/>
    </div>
  );
}

export default App;