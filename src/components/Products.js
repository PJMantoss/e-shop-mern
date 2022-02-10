import React from 'react';
import { popularProducts } from '../data';
import Product from './Product';

import styled from 'styled-components';

const Container = styled.div``;

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product />
        ))}
    </Container>
  )
}

export default Products;