import {NavLink} from "react-router-dom";

import { Card, Button, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const Item = ({ product }) => {
    
    const URL = `/store/product/detail/${product.id}`
    
    return(
        <Col sm={3}>
            <Card className="text-center mb-4 shadow">
                <Card.Header>{product.nombreCategoria}</Card.Header>
                    <Card.Body >
                        <Image style={style.img} src={product.src} alt={product.nombre}/>
                        <Card.Title style={style.textColor}>{product.nombre}</Card.Title>
                        <Card.Title>Precio: ${product.precio}</Card.Title>
                        <Card.Title>Stock: {product.stock}</Card.Title>
                    </Card.Body>
                <Card.Footer>
                    {product.stock ? (
                        <NavLink to={URL}>
                            <button type="button" className="btn btn-primary">Ver Detalle</button>
                        </NavLink>
                    ) : (
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No Disponible Ahora Mismo!</Tooltip>}>
                            <span className="d-inline-block">
                                <Button disabled style={{ pointerEvents: 'none' }}>
                                    Sin Stock
                                </Button>
                            </span>
                        </OverlayTrigger>
                    )}
                    
                </Card.Footer>
            </Card>
        </Col>
    )
}

const style = {
    img: {
        width: '100%',
        marginBottom: '10px',
        borderRadius: '5px'
    },
    textColor: {
        color: '#C2185B'
    }
}