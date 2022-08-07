
import './App.css';
import Header2 from './components/Nav/Header2'
import Home from './components/Home/Home';
import AddProduct from './components/AddNewProduct/AddProduct'
import ProductDetail from "./components/ProdjuctDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

import SearchProvider from './components/Context/Context';

function App() {
  return (
      <SearchProvider>
          <BrowserRouter>
              <Header2 />
              <div className="pages">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products/new" element={<AddProduct />} />
                      <Route
                          path="/products/:productId"
                          element={<ProductDetail />}
                      />
                      <Route path="/cart" element={<Cart />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </SearchProvider>
  );
}

export default App;
