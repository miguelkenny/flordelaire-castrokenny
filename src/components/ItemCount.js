import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Swal from 'sweetalert2';

export const ItemCount = ({product, manejarCarrito})=>{

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    const handlerClick = (product, count) => {
        //retorna al ItemDetail
        manejarCarrito(product, count);
        setShow(!show);
    }

    const sumarItem = () => {
        if(count < product.stock ){
            setCount(count + 1);
        }
        if(count === parseInt(product.stock)){
            Swal.fire("Carrito", `Solo disponemos de ${count} unidades en stock`, "info");
        }
    }

    const restarItem = () => {
        if(count > 0 ){
            setCount(count - 1);
        }
    }

    function mensaje(){
        Swal.fire("Carrito", `No puedes agregar ${count} unidades al carrito`, "info");
    }
    
    return(
        <div className="container mt-4">
            <div className="row">
                {show ? (
                    <>
                        <div className="d-flex justify-content-center text-center">
                            <div className="col-2">
                                <button className="btn btn-danger" onClick={()=>restarItem()}>-</button>
                            </div>
                            <div className="col-2">
                                <p className="fs-4">{count}</p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary" onClick={()=>sumarItem()}>+</button>
                            </div>
                        </div>
                        
                        <div className="d-grid gap-2 align-items-end">
                            <button className="btn btn-outline-primary" type="button" onClick={count !== 0 ? (()=>handlerClick(product, count)):(mensaje)}>
                                Añadir al carrito
                            </button>
                        </div>
                    </>
                ) :
                (
                    <div className="container">
                        <div className="d-flex text-center">
                            <div className="col-5">
                                <NavLink to={'/cart'} >
                                    <button className="btn btn-primary" type="button">Ir al carrito</button>
                                </NavLink>
                            </div>
                            <div className="col-7">
                                <NavLink to={'/'} >
                                    <button className="btn btn-outline-success" type="button">Seguir Comprando</button>
                                </NavLink>
                            </div>
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
}