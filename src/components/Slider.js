import React, { useState } from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background: #${props=>props.bg}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    width: 70%;
    height: 50%;
    margin: auto;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`;

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
    z-index: 2;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = direction => {};
  return (
      <div>
          <Container>
              <Arrow direction="left" onClick={() => handleClick("left")}>
                  <ArrowLeftOutlinedIcon />
              </Arrow>
              <Wrapper>
                  {sliderItems.map(item => (
                      <Slide bg={item.bg}>
                      <ImgContainer>
                          <Image src={item.image} />
                      </ImgContainer>
                      <InfoContainer>
                          <Title>{}</Title>
                          <Desc>{}</Desc>
                          <Button>{}</Button>
                      </InfoContainer>
                    </Slide>
                  ))}
              </Wrapper>
              <Arrow direction="right" onClick={() => handleClick("right")}>
                  <ArrowRightOutlinedIcon />
              </Arrow>
          </Container>
      </div>
      );
};

export default Slider;