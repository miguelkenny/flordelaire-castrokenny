import { ItemDetail } from "./ItemDetail";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

import { db } from "../../firebase/Firebase";
import { doc, getDoc, collection } from "firebase/firestore";

export const ItemDetailContainer = () =>{
    
    const [product, setProduct] = useState([]);
    let {id} = useParams();

    useEffect(() => {

        const collectionProducts = collection(db, "ItemCollection"); 
        const refDoc = doc(collectionProducts, id);
        
        getDoc(refDoc)
        .then((result)=>{

            setProduct({id, ...result.data()});
            
        })

        .catch((error) => {
            console.log("Error: " + error);
        })
    
    }, [id]);

    return(
        <ItemDetail product={product}/>
    )
}