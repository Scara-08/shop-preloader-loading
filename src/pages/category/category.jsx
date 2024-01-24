import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import preloader from '../../img/preloader.svg';

const Category = ({ addCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(({ data }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
        setLoading(false);
      });
  }, [params.category]);

  return (
    <section className="home">
      <div className="container">
        {loading ? (
          <div className="preloader">
            <img src={preloader} alt="Loading..." />
          </div>
        ) : (
          <div className="row">
            {products.map((item) => (
              <div key={item.id} className="col-4">
                <Card addCart={addCart} item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
