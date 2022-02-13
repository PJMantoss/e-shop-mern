import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

import styled from 'styled-components';

const Container = styled.div``;

const filterContainer = styled.div``;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <filterContainer></filterContainer>
    </Container>
  )
}

export default ProductList