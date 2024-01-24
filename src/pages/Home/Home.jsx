import { useState,useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import preloader from '../../img/preloader.svg';


const Home = ({addCart}) => {
    const [products, setProducts] = useState([]);
    const getProducts = () =>{
        axios ('https://fakestoreapi.com/products')
        .then(({data})=> setProducts(data));
    }
    useEffect(()=>{
getProducts();
    },  [])

   // Home.jsx

// ...

return (
    <section className="home">
      <div className="container">
        <div className="row">
          {products.length === 0 ? (
            <div className="preloader">
              <img src={preloader} alt="" />
            </div>
          ) : (
            products.map((item) => (
              <div key={item.id} className="col-4">
                <Card addCart={addCart} item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
  
}

export default Home;
