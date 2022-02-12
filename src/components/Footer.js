import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
    flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo></Logo>
        <Desc></Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon></SocialIcon>

          <SocialIcon></SocialIcon>

          <SocialIcon></SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer;