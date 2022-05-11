import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="d-flex flex-wrap m-0 py-3 mt-5 bg-light w-100">
            <div className="container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><NavLink to="/" className="nav-link m-2 px-2 text-muted">Tienda</NavLink></li>
                <li className="nav-item"><NavLink to="page/about" className="nav-link m-2 px-2 text-muted">Sobre nosotros</NavLink></li>
                <li className="nav-item"><NavLink to="page/contact" className="nav-link m-2 px-2 text-muted">Contacto</NavLink></li>
                </ul>
                <p className="text-center text-muted">© 2022 Urnas Flor Del Aire by Miguel Castro Kenny</p>
            </div>
        </footer>
    )
}