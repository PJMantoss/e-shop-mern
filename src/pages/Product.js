import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;
const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h1``;
const Desc= styled.p``;
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
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolo sa ta me. Lorem ipsum dolo sa ta me. Lorem ipsum dolo sa ta me.
                    Lorem ipsum dolo sa ta me. Lorem ipsum dolo sa ta me. Lorem ipsum dolo sa ta me.
                </Desc>
                <Price>$20</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product