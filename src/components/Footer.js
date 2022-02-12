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
    display: inherit;
    flex-direction: column;
    flex: 1;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: inherit;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
        <Logo>E-Shop</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin suscipit libero massa, ut ullamcorper mi tempor ut. Maecenas vel odio sapien. 
          Suspendisse potenti. Duis viverra elit sed tellus cursus bibendum.
        </Desc>
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