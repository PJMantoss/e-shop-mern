import React from 'react';
import { popularProducts } from '../data';
import Product from './Product';

import styled from 'styled-components';

const Container = styled.div``;

const Circle = styled.div``;

const Image = styled.img``;

const Info = styled.p``;

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products;