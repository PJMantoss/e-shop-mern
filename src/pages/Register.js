import React from 'react';

import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.div``;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNTS</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I agree to the processing of my personal data
            in accordance with the <b>Privacy Policy</b>.
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register