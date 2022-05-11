import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {contexto} from '../CartContext';

export const Cart = () => {
    const {cart, clear, cantProd, removeItem, sumarCompra} = useContext(contexto);

    return (
        <div className="container">
            <div className="row">
                <h1 className="display-6 mt-4">Mi Carrito</h1>
                    { cantProd ? (
                        <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                            {cart.map(p => (
                                
                                <div key={p.id}>
                                    <div className="card m-2 shadow-sm p-3 mb-5 bg-body rounded">
                                        <h5 className="card-header">{p.nombreCategoria}</h5>
                                        <div className="row">
                                            <div className="m-2 col-md-2">
                                                <img className="img-fluid rounded-3" src={p.src} alt={p.nombre} />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <h4 className="card-title">{p.nombre}</h4>
                                                    <p className="m-0 fs-6 card-text">Cantidad: {p.qty}</p>
                                                    <p className="m-0 fs-6 card-text">Precio Unitario: ${p.precio}</p>
                                                    <p className="mt-1 fs-5">Subtotal: ${p.qty * p.precio}</p>
                                                    <button className="btn btn-primary" onClick={()=>removeItem(p.id)}>Quitar del carrito</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            ))}
                            <hr></hr>
                            <div>
                                <h4 className="mt-4">Cantidad de Productos: {cantProd}</h4>
                                <h4 className="mt-4">Total Compra (Con Impuestos): ${sumarCompra()}</h4>
                                <button onClick={clear} className="btn btn-danger m-2 mb-2">Vaciar Carrito</button>
                                <NavLink to='/checkout'>
                                <button className="btn btn-success m-2 mb-2">Continuar al Ceckout</button>
                                </NavLink>
                            </div>
                        </div>)
                        :(
                            <>
                                <h3 className="mt-4">Tu carrito está vacío</h3>
                                <NavLink to='/'>
                                    <button className="btn btn-primary mb-4 mt-4" >Volver a la Tienda</button>
                                </NavLink>
                            </> 
                        )
                    }
            </div>
        </div>
    )
}