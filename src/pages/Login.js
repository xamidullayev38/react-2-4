import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../App";

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const LoginForm = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #ffeb00;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;
  
function Login() {
  const {isLogin,setLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  

  return (
    <LoginWrapper>
      <LoginForm>
        <h2>Express24 Admin</h2>
        <p>Tizimga kirish</p>
        <Input 
          placeholder="Login" 
        />
        <Input type="password" placeholder="Parol" />
        <LoginButton onClick={() => {
          setLogin(true);
          navigate("/");

        }}>Kirish</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;