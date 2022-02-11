import React from 'react';

import SendIcon from '@mui/icons-material/Send';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fcf5f5;
`;

const Title = styled.h1``;

const Desc = styled.div``;

const InputContainer = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates on your favorite products!</Desc>
        <InputContainer>
            <Input placeholder="" />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;