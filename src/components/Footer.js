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
  display: inherit;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #${props => props.color};
  color: white;
  margin-right: 20px;
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
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon >

          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color="e60023">
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