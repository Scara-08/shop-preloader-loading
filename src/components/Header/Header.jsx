import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://fakestoreapi.com/products/categories')
            .then(({ data }) => {
                setCategories(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
                setLoading(false);  
            });
    }, []);

    return (
        <header className="header">
            <div className="container header-container">
                <h1><Link to={'/'}> Shop </Link></h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <nav>
                        {categories.map(item => (
                            <Link key={item} to={`/category/${item}`}>{item}</Link>
                        ))}
                        <Link to={'/'}> home</Link>
                        <Link to={'/cart'}>cart</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
