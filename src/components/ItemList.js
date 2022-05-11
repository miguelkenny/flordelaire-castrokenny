import { useParams } from 'react-router-dom';
import {Item} from "./Item";
import { Card, Container, Row } from 'react-bootstrap';

export const ItemList = ({ products }) => {
    
    const {category} = useParams();
    const productsFilter = products.filter((p)=> p.cat===category);

    return(
        <Container>
            <Card.Title className="display-5 text-center mb-3">Nuestras Urnas {category}</Card.Title>
            <Row>
                {category ? (productsFilter.map((product)=>(
                        <Item key={product.id} product={product} />
                ))):
                (products.map((product)=>(
                    <Item key={product.id} product={product} />)))}
            </Row>
        </Container>
    );

}