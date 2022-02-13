import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Clothes</Title>
        <FilterContainer>
            <Filter>filter1</Filter>
            <Filter>filter2</Filter>
        </FilterContainer>
        <Product />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList