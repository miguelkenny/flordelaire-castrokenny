import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom';
import {contexto} from '../CartContext';
import {db, app} from '../../firebase/Firebase';
import {addDoc, collection, serverTimestamp, doc, updateDoc, getDoc} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import Swal from 'sweetalert2';

const auth = getAuth(app);

export const CheckOut = () => {
    const {cart, clear, cantProd, sumarCompra, removeItem} = useContext(contexto);
    const [idSale, setIdSale] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [paymentMethod, setPayment] = useState("");
    const [cuotas, setCuotas] = useState("");
    const [ccName, setCcName] = useState("");
    const [ccNumber, setCcNumber] = useState("");
    const [ccExpiration, setCcExpiration] = useState("");
    const [ccCvv, setCcCvv] = useState("");

    let [successSale, setSuccessSale] = useState(false);

    const clientData = {
        name: name, 
        email: email,
        phone: phone,
        address: address, 
        state: state, 
        country: country,
        postalCode: postalCode
    };

    const payment = {
        paymentMethod: paymentMethod,
        ccName: ccName,
        ccNumber: ccNumber,
        ccExpiration: ccExpiration,
        ccCvv: ccCvv,
        cuotas: cuotas
    }
    
    const endSales = () => {

        const saleCollection = collection(db, "Venta");
        addDoc(saleCollection, {
            clientData,
            payment,
            items: cart,
            date: serverTimestamp(),
            total: sumarCompra()
        })
        .then(result => {
            setIdSale(result.id)
        })
    }

    function handlerEndSale() {
        
        if(auth.currentUser){
            endSales();

            cart.forEach((prod) => {
                const orderDoc = doc(db, "ItemCollection", prod.id)
                getDoc(orderDoc)
                .then((res) => {
                    const newStock = res.data().stock - prod.qty;
                    updateDoc(orderDoc, {stock: newStock})
                })
            })

            clear();
            setSuccessSale(!successSale);
        } else {
            Swal.fire("Inicia Sesion", `Para finalizar la compra debes iniciar sesión`, "info");
        }
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="./logo.png" alt="Logo Urnas Flor Del aire" width="120" height="120"/>
                <h2>Checkout</h2>
                <p className="lead">Muchas gracias por elegirnos. Estás en el último paso para adquirir los productos de Urnas Flor Del Aire. Te guiaremos paso a paso para concretar tu compra de manera exitosa!</p>
            </div>
            
            { !successSale ? (
            
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between">
                            <span>Tu Carrito</span>
                            <span className="badge bg-primary rounded-pill">{cantProd}</span>
                        </h4>
                        <ul className="list-group mb-4">
                            {cart.map(prod =>
                                <div key={prod.id}>
                                    
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div className="m-2">
                                            <img className="img-fluid rounded-3" src={prod.src} alt={prod.nombre} width="80" height="80"/>
                                        </div>
                                        <div>
                                            <h6 className="my-2">{prod.nombre}</h6>
                                        </div>
                                        <span className="my-2 align-item-center">${prod.precio}</span>
                                        <div>
                                            <button className="btn btn-danger m-2" onClick={()=>removeItem(prod.id)}>X</button>
                                        </div>
                                    </li>
                                    
                                </div>
                            )}
                            {sumarCompra() ?(
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total Compra:</span>
                                    <strong>${sumarCompra()}</strong>
                                </li>
                            ):(
                                <li className="list-group-item d-flex justify-content-between mt-2">
                                    <NavLink to="/">
                                        <p className="btn btn-primary mt-3">Volver a la tienda</p>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Datos para el envío</h4>
                        <form className="needs-validation">
                            <div className="row g-3">
                                <div className="col-sm-11">
                                    <label htmlFor="name" className="form-label">Nombre y Apellido <span className="text-muted">(Requerido)</span></label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre y Apellido"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Requerido)</span></label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        placeholder="email@ejemplo.com"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-5">
                                    <label htmlFor="phone" className="form-label">Num. Telefono <span className="text-muted">(Requerido)</span></label>
                                    <input 
                                        type="phone"
                                        className="form-control"
                                        placeholder="+54 11 542-564878"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor="address" className="form-label">Dirección <span className="text-muted">(Requerido)</span></label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="1234 Main St"
                                        id="address"
                                        name="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="country" className="form-label">Pais</label>
                                    <select name="country" className="form-select" onChange={(e) => setCountry(e.target.value)}>
                                        <option value="">Seleccionar...</option>
                                        <option value="Argentina">Argentina</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Localidad</label>
                                    <select name="state" className="form-select" onChange={(e) => setState(e.target.value)}>
                                        <option value="">Seleccionar...</option>
                                        <option value="Buenos Aires">Buenos Aires</option>
                                        <option value="Cordoba">Cordoba</option>
                                        <option value="Mendoza">Mendoza</option>
                                        <option value="San Juan">San Juan</option>
                                        <option value="Rosario">Rosario</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="postalCode" className="form-label">Código Postal</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="C.P."
                                        id="postalCode" 
                                        name="postalCode"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </div>
                                <hr className="my-4"/>
                                <h4 className="mb-2">Método de Pago</h4>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input 
                                            type="radio"
                                            className="form-check-input"
                                            id="credit"
                                            name="paymentMethod"
                                            value="Credit"
                                            onChange={(e) => setPayment(e.target.value)}
                                        />
                                        <label htmlFor="paymentMethod" className="form-check-label">Tajeta de Crédito</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input 
                                            type="radio"
                                            className="form-check-input"
                                            id="debit"
                                            name="paymentMethod"
                                            value="Debit" 
                                            onChange={(e) => setPayment(e.target.value)}
                                        />
                                        <label htmlFor="paymentMethod" className="form-check-label">Tarjeta de Débito</label>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="cuotas" className="form-label">Cantidad de Cuotas</label>
                                        <select name="cuotas" className="form-select" onChange={(e) => setCuotas(e.target.value)}>
                                            <option value="">Seleccionar...</option>
                                            <option value="3 Cuotas S/I">3 s/interes</option>
                                            <option value="6 Cuotas S/I">6 s/interes</option>
                                            <option value="9 Cuotas S/I">9 s/interes</option>
                                            <option value="12 Cuotas S/I">12 s/interes</option>
                                        </select>
                                    </div>
                                    <div className="row gy-3">
                                        <div className="col-md-5">
                                            <label htmlFor="ccName" className="form-label">Nombre impreso en la tarjeta</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                id="ccName"
                                                name="ccName"
                                                value={ccName}
                                                onChange={(e) => setCcName(e.target.value)}  
                                            />
                                            <small className="text-muted">Nombre completo como figura en su tarjeta</small>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="ccNumber" className="form-label">Ingrese los 16 números de la tarjeta</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                id="ccNumber"
                                                name="ccNumber"
                                                value={ccNumber}
                                                onChange={(e) => setCcNumber(e.target.value)} 
                                            />
                                            <div className="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="ccExpiration" className="form-label">Vencimiento</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                id="ccExpiration"
                                                name="ccExpiration"
                                                value={ccExpiration}
                                                onChange={(e) => setCcExpiration(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Expiration date required
                                            </div>
                                            <span className="text-muted">(formato 00/00)</span>
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="ccCvv" className="form-label">CVV</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                id="ccCvv"
                                                name="ccCvv"
                                                value={ccCvv}
                                                onChange={(e) => setCcCvv(e.target.value)}
                                            />
                                            <span className="text-muted">(Código de sguridad que figura en el dorso de la tarjeta)</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4"/>
                                <button type="button" className="mb-4 w-60 btn btn-success btn-lg" onClick={()=>{handlerEndSale()}}>Finalizar Compra</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            :(                
                <div className="container text-center border rounded-3 p-4 shadow bg-light">
                    <div>
                        <h2 className="display-6">¡Muchas Gracias!</h2>
                    </div>
                    <div className="p-3">
                        <h3>El Identificador de tu Compra es: <span className="text-primary">ID-{idSale}</span></h3>
                    </div>
                    <div className="p-3">
                        <p className="fs-5">¿Alguna duda con tu compra? ¿Quieres comentarnos algo?</p>
                        <NavLink to="/page/contact"><button className="btn btn-primary">Escríbenos</button></NavLink>
                    </div>
                </div>                
            )}
        </div>
    )
} 
