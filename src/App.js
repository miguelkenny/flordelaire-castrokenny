import NavBar from './components/NavBars/NavBar';
import NavLogin from './components/NavBars/NavLogin';

import ItemListContainer from './components/Items/ItemListContainer';
import { ItemDetailContainer } from './components/Items/ItemDetailContainer';
import ScrollButton from './components/ScrollButton';
import {Footer} from './components/Footer';

import { About } from './components/Pages/About';
import {Contact } from './components/Pages/Contact';
import {Cart} from './components/Cart/Cart';
import {CheckOut} from './components/CheckOut/CheckOut';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomProvider from './components/Cart/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> {

  return ( 
    <BrowserRouter>
      <CustomProvider>
        <NavLogin />
        <NavBar/>
        <ScrollButton/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="store/product/detail/:id" element={<ItemDetailContainer />} />
          <Route path="page/about" element={<About />} />
          <Route path="page/contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={
                            <div className="container text-center">
                              <main style={{ padding: "1rem" }}>
                                <p className="mt-4 display-4">La página que buscas no existe!</p>
                                <div>
                                  <img src="./assets/404.jpg" alt="404" />
                                </div>
                              </main>
                            </div>
                          }/>
        </Routes>
      </CustomProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;