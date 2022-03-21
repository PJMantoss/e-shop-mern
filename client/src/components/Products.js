import React { useState } from 'react';
import { popularProducts } from '../data';
import Product from './Product';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`;

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState();
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products;