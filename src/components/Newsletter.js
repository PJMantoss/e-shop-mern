import React from 'react';

import SendIcon from '@mui/icons-material/Send';

import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1``;

const Desc = styled.div``;

const InputContainer = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates </Desc>
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