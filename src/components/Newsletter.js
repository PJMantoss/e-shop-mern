import React from 'react';

import SendIcon from '@mui/icons-material/Send';

import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Container>
        <Title />
        <Description />
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