import React from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
    height: 20%;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p``;
const Button = styled.button``;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.7;
`;

const Slider = () => {
  return (
      <div>
          <Container>
              <Arrow direction="left">
                  <ArrowLeftOutlinedIcon />
              </Arrow>
              <Wrapper>
                  <Slide>
                    <ImgContainer>
                        <Image src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>Summer Sales</Title>
                        <Desc>Don't Compromise on Stle. Get 30% Off!</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                  </Slide>
              </Wrapper>
              <Arrow direction="right">
                  <ArrowRightOutlinedIcon />
              </Arrow>
          </Container>
      </div>
      );
};

export default Slider;