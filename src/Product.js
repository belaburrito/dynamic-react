import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from  './Header';

const Product = (props) => {
    
  let { id } = useParams();
  const [data, setData] = useState("");
  const [category, setCategory] = useState("");

useEffect(() => {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;
    
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            //const json = await response.json();
            console.log(response.data);
            setData(response.data);
            setCategory(response.data.category);

    
        } catch (error) {
            console.log("error", error);
        }
    }

    fetchData();
}, []);



return (
    <div className='product-container' key={data.id}>
        <Header />
     <div>
        <img className="prod=image" src={category.image} />
     </div>
     <div className="product-description"> 
        <h1 className="title">{data.title}</h1>
        <h2>{category.name}</h2>
        <p>{data.description}</p>
        <p>
            <strong>Price: </strong>{data.price}
        </p>
     </div>
      {/*  <div>
        <img className='prod-image' src={data.category.image} alt='' />
      </div>
     <div>
        <h1 className='title'>{data.title}</h1>
        <h2>{data.category.name}</h2>
        <p>{data.description}</p>
        <p>
          <strong>Price:</strong> {data.price}
        </p>
      </div>*/}
    </div> 
  );
};
export default Product;