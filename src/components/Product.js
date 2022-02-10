import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styled from 'styled-components';

const Container = styled.div``;

const Circle = styled.div``;

const Image = styled.img``;

const Info = styled.p``;

const Product = () => {
  return (
    <Container>
        <Circle />
        <Image />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>

            <Icon></Icon>

            <Icon></Icon>
        </Info>
    </Container>
  )
}

export default Product