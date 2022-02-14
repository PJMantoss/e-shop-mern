import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import styled from 'styled-components';

const Container = styled.div``;

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product