import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    ${mobile({ padding: "10px 0" })};
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    flex:1;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex:1;
    ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    console.log(quantity)

  return (
  <Container>
      <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                  <Input placeholder="Search" />
                <SearchIcon style={{color:"gray", fontSize:16}} />
              </SearchContainer>
          </Left>
          <Center>
              <Logo>E-SHop</Logo>
          </Center>
          <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
              </MenuItem>
          </Right>
      </Wrapper>
  </Container>
  );
};

export default Navbar;