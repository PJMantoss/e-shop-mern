import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
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
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`flex:1;`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

const Navbar = () => {
  return (
  <Container>
      <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                  <Input />
                <SearchIcon />
              </SearchContainer>
          </Left>
          <Center>
              <Logo>E-SHop</Logo>
          </Center>
          <Right>Right</Right>
      </Wrapper>
  </Container>
  );
};

export default Navbar;