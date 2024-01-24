import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './detail.css';

const Detail = (addCart) => {
    const [productData, setProductData] = useState({});
    const params = useParams();

    const navigate = useNavigate();
    
      

   useEffect(()=>{
    axios (`https://fakestoreapi.com/products/${params.id}`)
    .then(({data}) => setProductData(data));
   }, [])


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-6"><img src={productData.image} alt="" className="detail-img"/></div>

                    <div className="col-6">
                        <h1>{productData.title}</h1>
                        <p>{productData.description}</p>
                        <br />
                        <p>{productData.category}</p>
                        <p>price: ${productData.price}</p>
                        <br />
                        <button className="detail-btn"
                            onClick={()=>{
                                addCart(productData)
                            }}
                       > buy</button>

                      <button className="detail-btn"
                            onClick={()=>{
                                navigate (-1);
                            }}
                            
                       > Go back</button>
                    </div>

                </div>
            </div>
        </section>
        
        
    );
}

export default Detail;
