import React from 'react';
import { popularProducts } from '../data';

import styled from 'styled-components';

const Container = styled.div``;

const Products = () => {
  return (
    <Container>
        {popularProducts.map()}
    </Container>
  )
}

export default Products;