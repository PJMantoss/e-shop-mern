import React from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Arrow = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Slider = () => {
  return (
      <div>
          <Container>
              <Arrow></Arrow>
          </Container>
      </div>
      );
};

export default Slider;