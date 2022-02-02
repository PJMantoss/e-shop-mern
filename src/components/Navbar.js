import React from 'react';
import styled from 'styled-components';

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

const Left = styled.div`flex:1;`;
const Center = styled.div`flex:1;`;
const Right = styled.div`flex:1;`;

const Navbar = () => {
  return (
  <Container>
      <Wrapper>
          <Left>
              <Language>EN</Language>
          </Left>
          <SearchContainer></SearchContainer>
          <Center>Center</Center>
          <Right>Right</Right>
      </Wrapper>
  </Container>
  );
};

export default Navbar;