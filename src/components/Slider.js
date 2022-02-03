import React from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: coral;
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
`;

const Slider = () => {
  return (
      <div>
          <Container>
              <Arrow>
                  <ArrowLeftOutlinedIcon />
              </Arrow>
              <Arrow>
                  <ArrowRightOutlinedIcon />
              </Arrow>
          </Container>
      </div>
      );
};

export default Slider;