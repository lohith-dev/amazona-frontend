import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product/Product.js';
import { store } from './Store';

function App() {
  // console.log(store.getState());
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/product/:slug"  element={<Product/>} /> 
        </Routes>
  </Router>
  );
}

export default App;
