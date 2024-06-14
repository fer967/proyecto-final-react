
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";


function App(){
  return(
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer greeting={'todos nuestros productos'}/>}/>
      <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={'productos por categoria'}/>}/>
      <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;


//--- Firebase---
/*import './App.css';
import AddOrders from './components/AddOrders';
import ProductsComponent from './components/ProductsComponent';

function App (){
  return(
    <>
    <h1>Firebase</h1>
    <ProductsComponent/>
    <AddOrders/>
    </>
  );
}

export default App;*/



//--- clase7---
/*import'./App.css';
import PruebaProductos from './components/PruebaProductos';

function App(){
  return(
    <>
    <PruebaProductos/>;
    </>
  )
}

export default App;*/

//--- ejercicio API CALL---
/*import'./App.css';
import BookList from './components/BookList.jsx';

function App(){
  return(
    <>
    <h1>Libros para Desarrolladores</h1>
    <BookList/>;
    </>
  );
}

export default App;*/











/*import'./App.css';
import AvatarComponente from './components/AvatarComponente';
import CardComponente from './components/CardComponente';
import RefBasico from './components/RefBasico';
import SearchComponente from './components/SearchComponente';

function App(){
    return(
        <>
          <CardComponente titulo="usuario">
            <AvatarComponente/>                
          </CardComponente>
          <RefBasico/>
          <SearchComponente/>
        </>
    );
}

export default App;*/







//---prueba proyecto---

/*import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
function App() {  
  return (        
    <>
      <header className='contenedor'>
      <h1>Instrumentos Musicales</h1>
      <NavBar/>
      <CartWidget/>
      </header>
      <main>
        <ItemListContainer greeting={'Bienvenidos a mi tienda !'}/>
      </main>
      
    </>
  )
}
export default App */




// clase 3

/*import './App.css'
function App() {   // componente funcional
  const estilosImagen={
    width:'400px',
    height:'400px',
    borderRadius:'50%',
    border:'5px solid black'
  }
  return (        // retorna jsx
    <>
      <h1 className='titulo'>Hola React</h1>
      <img style={estilosImagen} src="https://www.esimagenes.com/pimagen/bulbasaur-pokemon.png" alt="" />
    </>
  )
}
export default App */







