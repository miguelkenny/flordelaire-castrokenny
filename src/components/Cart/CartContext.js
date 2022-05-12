import { createContext, useState, useEffect } from 'react';

export const contexto = createContext();

const {Provider} = contexto;

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    let [cantProd, setCantProd] = useState(0);
    let [addItemProduct, setAddItemProduct] = useState(true)

    useEffect(() =>{
        const getCantidadProductos= () => {
            let qtyInCart = 0;
            cart.forEach(c => {
                qtyInCart += c.qty
            });
            setCantProd(qtyInCart);
        }
        getCantidadProductos();
        
    }, [addItemProduct, cart])

    const addItem = (item, qty) => {
        isInCart(item.id) ? ((cart[cart.indexOf(isInCart(item.id))].qty += qty)) : setCart([...cart, {...item, qty: qty}]);    
        setAddItemProduct(!addItemProduct)
    }
    
    const isInCart = (id) => {
        return cart.find(p => p.id === id);
    }
    
    const sumarCompra = () => {
        let suma = 0;
        cart.forEach(c => {
            suma += c.qty * c.precio
        });
        return suma;
    }
    const removeItem = (id) => {
        const newCart = cart.filter(p => p.id !== id);
        setCart(newCart)
    }

    const clear = () => {
        setCart([]);
        setCantProd(0);
    }
    
    const ContextValue = {
        cart,
        addItem,
        removeItem,
        isInCart,
        cantProd,
        clear,
        sumarCompra
    }
    return (
        <Provider value={ContextValue}> {children} </Provider>
    )
}

export default CustomProvider;