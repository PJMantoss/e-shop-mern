import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
    flex: 1;
`;

const Logo = styled.h1``;

const Desc = styled.div``;

const Icon = styled.div``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;

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

          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer;