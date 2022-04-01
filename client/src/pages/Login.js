import React, { useState } from 'react';
import { mobile } from '../responsive';
import { useDispatch } from 'react-redux';

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
  ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: white;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background: teal;
  padding: 15px 20px;
  margin: 10px 0;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
              placeholder="username"
              onChange={e => setUsername(e.target.value)} 
          />
          <Input 
              placeholder="password" 
              onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>SIGN IN</Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login