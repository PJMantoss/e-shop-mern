import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import styled from 'styled-components';

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: gray;
    z-index: 3;
    opacity: 0;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    position: relative;
    background: #f5fbfd;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin: 10px;
    background: white;
    border-radius: 50%;
    transition: all 0.8s ease;

    &:hover{
        background: #e9f5f5;
        transform: scale(1.1);
    }
`;

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