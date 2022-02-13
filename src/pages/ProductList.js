import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

import styled from 'styled-components';

const Container = styled.div``;

const FilterContainer = styled.div``;

const Title = styled.h1``;

const Filter = styled.div``;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title></Title>
        <FilterContainer>
            <Filter></Filter>
            <Filter></Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList