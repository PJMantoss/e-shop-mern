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
        const response = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
        console.log(response);
      }catch(err){}
    }

    getProducts();
  }, [cat])

  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products;