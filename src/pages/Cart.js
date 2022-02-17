import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopBtn = styled.button`
    padding: 10px;
    font-weight: 600;
`;

const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopBtn>Continue Shopping</TopBtn>
                <TopTexts>
                    <TopText></TopText>
                    <TopText></TopText>
                </TopTexts>
                <TopBtn>Checkout Now</TopBtn>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart