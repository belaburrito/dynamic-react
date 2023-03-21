import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from  './Header';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    const [query, setQuery] = useState("");


    useEffect(() => {
        const url = `https://api.escuelajs.co/api/v1/products/?title=${query}`;
    
    
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                //const json = await response.json();
                //console.log(response);
                setProducts(response.data);
        
            } catch (error) {
                console.log("error", error);
            }
        }
    
        fetchData();
    }, [query]);

    return (
        <div className="page-container">
            <Header />


            <div className="item-container">
                <div className="search">
                        <input type="text"
                            placeholder={"Search"}
                            className={"input"}
                            onChange={event => setQuery(event.target.value)}
                            value={query}
                        />
                </div>
                
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.category.image} alt='' />
                        <h3>{product.price}</h3>
                        <p>{product.title}</p>
                        <Link to={`/product/${product.id}`}>View</Link>
                    </div>
                ))}
            </div>


            

        </div>
    )
}

export default FeaturedProducts;