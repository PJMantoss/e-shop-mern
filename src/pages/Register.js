import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.span``;

const Button = styled.button``;

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