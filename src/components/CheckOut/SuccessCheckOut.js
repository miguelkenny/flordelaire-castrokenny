import { NavLink } from 'react-router-dom';

export const SuccessCheckOut = ({idSale}) => {
    return (
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
    )
}