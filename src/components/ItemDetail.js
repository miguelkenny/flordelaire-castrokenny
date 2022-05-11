import {useContext, useState} from 'react';
import {ItemCount} from './ItemCount';
import "./ItemDetail.css"
import {contexto} from './CartContext';

export const ItemDetail = ({ product }) => {

    const {addItem} = useContext(contexto)
    
    const [urlImage, setURLImage] = useState("");

    const manejarCarrito = (item, count)=>{
        addItem(item, count);
    }
    function clickOnImage(src){
        setURLImage(src)
    }
    return (
        <div key={product.id} className="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">
            <div className="row justify-content-center p-3">
                <div className="col-7 m-auto">
                    <div>
                        {urlImage ? (
                            <img src={urlImage} className="img-fluid rounded mx-auto d-block shadow rounded border" width="70%" alt={product.nombre} />
                        ):(
                            <img src={product.src} className="img-fluid rounded mx-auto d-block shadow rounded border" width="70%" alt={product.nombre} />
                        )}
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col w-100">
                            <img onClick={()=>clickOnImage(product.src)} src={product.src} className="border shadow-sm bg-body rounded border w-75" style={styles} alt={product.nombre} />
                        </div>
                        <div className="col w-auto">
                            <img onClick={()=>clickOnImage(product.src1)} src={product.src1} className="border shadow-sm bg-body rounded border w-75" style={styles} alt={product.nombre} />
                        </div>
                        <div className="col w-auto"> 
                            <img onClick={()=>clickOnImage(product.src2)} src={product.src2} className="border shadow-sm bg-body rounded border w-75" style={styles} alt={product.nombre} />
                        </div>
                        <div className="col w-auto">
                            <img onClick={()=>clickOnImage(product.src3)} src={product.src3} className="border shadow-sm bg-body rounded border w-75" style={styles} alt={product.nombre} />
                        </div>
                        <div className="col">
                            <img onClick={()=>clickOnImage(product.src4)} src={product.src4} className="border shadow-sm bg-body rounded border w-75" style={styles} alt={product.nombre} />
                        </div>
                    </div>
                    <div className="mt-3">
                        <hr/>
                    </div>
                    <div className="row">
                        <p className="fs-3">Características principales</p>
                        <div className="row ps-4">
                            <div className="col-2 d-flex p-2 bd-highlight border rounded bg-secondary">
                                <span className="text-light fs-5">Marca</span>
                            </div>
                            <div className="col-10 d-flex p-2 bd-highlight border rounded bg-ligth">
                                <span className="text-dark fs-6">{product.marca}</span>
                            </div>
                        </div>
                        <div className="row mb-4 ps-4">
                            <div className="col-2 d-flex p-2 bd-highlight border rounded bg-secondary">
                                <span className="text-light fs-5">Capacidad:</span>
                            </div>
                            <div className="col-10 d-flex p-2 bd-highlight border rounded bg-ligth">
                                <span className="text-dark fs-6">{product.capacidad}</span>
                            </div>
                        </div>
                        <div>
                            <hr/>
                        </div>
                        <p className="fs-3">Descripción</p>
                        <p className="fs-5 text-break">{product.descripcion}</p>
                    </div>
                </div>
                <div className="col-4 border border-1 rounded rounded-2 p-4 shadow-sm p-3 mb-5 bg-body rounded">
                    <p className="mt-1 fs-6 text-muted" >Nuevo | Material: {product.cat}</p>
                    <p className="h4">{product.nombre}</p>
                    <p className="p-0">Stock Disponible: {product.stock} unidades</p>
                    <p className="display-6">${product.precio}</p>
                    <p className="fs-5 fw-light">podes pagarlo hasta en 12 cuotas s/interes de ${(product.precio/12).toFixed(2)}</p>
                    <div className="text-center">
                    <img src="/tarjetas.png" alt="Tarjetas De Crédito" width="90%"/>
                    </div>
                    <hr/>
                    <div className="d-grid gap-2 align-items-end mb-5">
                        <ItemCount product={product} manejarCarrito={manejarCarrito}/>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div className="text-center p-5">
                        <img src="/logo.png" alt="logo-urnas-flor-del-aire" className="mx-auto" width="80%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    cursor: 'pointer'
}