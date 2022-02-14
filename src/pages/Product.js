import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc= styled.div``;
const Price = styled.span``;

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src="" />
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumsuit</Title>
                <Desc></Desc>
                <Price></Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product