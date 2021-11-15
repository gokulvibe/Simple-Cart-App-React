import './App.css';
import Home from './home';
import Cart from './Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './cartContext';
function App() {
  return(
    <div className='app'>
    {/* <CartProvider>
          <Home />
      </CartProvider> */}
    <BrowserRouter basename="/">
          <CartProvider>
            <Routes>
              
                <Route path='/' element={<Home/>} /> 
                <Route path='/cart' element={<Cart/>} />
              
                  
            </Routes>

          </CartProvider>
        
        {/* <CartProvider>
          <Home />
        </CartProvider> */}
    </BrowserRouter>
      </div>
    
  )
}

export default App;
