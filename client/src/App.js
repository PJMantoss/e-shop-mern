import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Success from './pages/Success';
import Pay from './stripe/Pay';
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element = {user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/payment" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;