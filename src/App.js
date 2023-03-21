import './App.css';
import FeaturedProducts from './FeaturedProducts';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Product';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<FeaturedProducts />} />
          <Route exact path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
