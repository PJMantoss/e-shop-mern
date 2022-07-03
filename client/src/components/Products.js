import React, { useState, useEffect } from 'react';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`;

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await axios.get(
          cat 
            ? `http://localhost:5000/api/products?category=${cat}` 
            : "http://localhost:5000/api/products"
          );
        setProducts(response.data);
      }catch(err){}
    }

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value]) => 
          item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters]);

  useEffect(() => {
    if(sort = "newest"){
      setFilteredProducts(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt))
    } else if(sort = "asc"){
      setFilteredProducts(prev => [...prev].sort((a,b) => a.price - b.price))
    }else{
      setFilteredProducts(prev => [...prev].sort((a,b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
        {cat 
           ? filteredProducts.map(item => (<Product item={item} key={item.id} />))
           : products.slice(1,4).map(item => (<Product item={item} key={item.id} />))
        }
    </Container>
  )
}

export default Products;