import { NavLink } from 'react-router-dom';

export const SuccessCheckOut = ({idSale, name, total}) => {

    return (
        <div className="container text-center border rounded-3 shadow mt-3">
            <div className="container mt-4 mb-4">
            <div className="py-5 text-center">
                <p className="display-6">{name}... <span className="fw-bold fst-italic text-primary fs-2">Todo salió perfecto!</span></p>
            </div>
            <div>
                <h2 className="display-4 mb-4 text-danger">¡Muchas Gracias! {total}</h2>
            </div>
            <div className="p-3">
                <h3>El Identificador de tu Compra es: <span className="text-primary">ID-{idSale}</span></h3>
            </div>
            <div className="p-3 border shadow mb-4">
                <p className="fs-3">Tu pedido está confirmado:</p>
                <p className="fs-4">Recibirás un correo electrónico cuando tu pedido esté listo...</p>
            </div>
            <hr/>
            <div className="bg-dark p-3 rounded-3 shadow mb-3">
                <p className="fs-5 text-light p-3">¿Alguna duda con tu compra? ¿Quieres comentarnos algo?</p>
                <NavLink to="/page/contact"><button className="btn btn-primary">Escríbenos</button></NavLink>
            </div>
            </div>
        </div>
    )
}