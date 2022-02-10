import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 5;
`;

const Circle = styled.div``;

const Image = styled.img``;

const Info = styled.div``;

const Product = () => {
  return (
    <Container>
        <Circle />
        <Image />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>

            <Icon>
                <SearchOutlinedIcon />
            </Icon>

            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product