import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Wrapper>
      <h1>Login</h1>
      <LoginForm>
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="PW" />
        <button type="submit">Sign in</button>
      </LoginForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const LoginForm = styled.form`
    display : flex;
    flex-direction : column;
    width : 30%;
    gap : 20px;
`


export default Login
