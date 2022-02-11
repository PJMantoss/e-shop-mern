import React from 'react';

import SendIcon from '@mui/icons-material/Send';

import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1``;

const Desc = styled.p``;

const InputContainer = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
        <Title></Title>
        <Desc></Desc>
        <InputContainer>
            <Input />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter