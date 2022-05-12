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
import CustomProvider from './components/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> {
  const welcome = "";
  const name = "";

  return ( 
    <BrowserRouter>
      <CustomProvider>
        <NavLogin />
        <NavBar welcome={welcome} name={name}/>
        <ScrollButton/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer welcome={welcome} name={name}/>} />
          <Route path="store/product/detail/:id" element={<ItemDetailContainer />} />
          <Route path="page/about" element={<About />} />
          <Route path="page/contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={
                            <main style={{ padding: "1rem" }}>
                              <p>La página que buscas no existe!</p>
                            </main>
                          }/>
        </Routes>
      </CustomProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;