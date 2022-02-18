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
    padding: 20px;
`;

const TopBtn = styled.button`
    padding: 10px;
    font-weight: 600;
    border: ${props => props.type === "filled" && "none"};
    background: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
`;

const Product = styled.div``;

const ProductDetail = styled.div``;

const Image = styled.img``;

const PriceDetail = styled.div``;

const Detail = styled.div``;

const Product = styled.div``;

const ProductName = styled.span``;

const ProductSize = styled.div``;

const ProductId = styled.span``;

const ProductColor = styled.div``;

const Details = styled.div``;

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
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopBtn type="filled">Checkout Now</TopBtn>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="ttps://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName> <b>Product:</b> JOEL THUNDER SHOES </ProductName>
                                <ProductId> <b>ID:</b> 8095544003 </ProductId>
                                <ProductColor />
                                <ProductSize> <b>Size:</b> 37.5 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail></PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart