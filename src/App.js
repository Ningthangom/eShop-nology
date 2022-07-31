
import './App.css';
import Header2 from './components/Nav/Header2'
import Home from './components/Home/Home';
import AddProduct from './components/AddNewProduct/AddProduct'
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom'

function App() {



  return (
      <>
          <BrowserRouter>
              <Header2 />
              <div className="pages">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products/new" element={<AddProduct/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
