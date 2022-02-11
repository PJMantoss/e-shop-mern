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

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 40px;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background: teal;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates on your favorite products!</Desc>
        <InputContainer>
            <Input placeholder="Your E-Mail" />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;