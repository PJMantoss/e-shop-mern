import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styled from 'styled-components';

const Container = styled.div

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        Cart
        <Footer />
    </Container>
  )
}

export default Cart