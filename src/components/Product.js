import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
`;

const Image = styled.img`
    height: 75%;
`;

const Info = styled.div``;

const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
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