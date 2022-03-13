import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pay from './stripe/Pay';
import Success from './stripe/Success';


const App = () => {
  return (
    <Router>
      <Pay />
    </Router>
  );
}

export default App;