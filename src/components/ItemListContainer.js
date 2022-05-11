import { ItemList } from './ItemList';
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from "react-router-dom";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/Firebase";

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);

    const {namePage} = useParams();

    let [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const collectionProducts = collection(db, "ItemCollection");

        setTimeout(()=>{
            getDocs(collectionProducts)
            .then((result)=>{
                const docs = result.docs;
                const list = docs.map(products => {
                    const id = products.id;
                    const product = {
                        id,
                        ...products.data()
                    }
                    return product;
                }) 
                setProducts(list);
            })
            .catch((error) => {
                console.log("Error: " + error);
            })

            .finally(() => {
                setLoading(false);
            })
        }, 2000);    
        
    }, [namePage]);
    
    return (
        <div className="container shadow-lg p-3 mt-4 mb-5 bg-body rounded">
            <img src="/header-urnas-flor-del-aire-alto-250px.jpg" alt="banner" className="w-100"/>
                <div className="mt-4">
                    {loading ? (
                        <div style={style.container}>
                            <span style={style.load}>
                                <ClipLoader color={"red"} loading={loading} size={150} />
                            </span>
                        </div>
                    ) : (
                        <ItemList products={products} />
                    )}
                </div>
        </div>
    );
}
export default ItemListContainer

const style = {
    load: {
        display: 'flex',
        felxDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}