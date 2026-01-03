import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      // 2-vazifa: Dashboardga kirish va login holatini saqlash
      localStorage.setItem("isAuthenticated", "true");
      navigate("/orders"); // Dashboardning birinchi sahifasiga yo'naltirish
    } else {
      alert("Ism kiriting!");
    }
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <h2>Express24 Admin</h2>
        <p>Tizimga kirish</p>
        <Input 
          placeholder="Login" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input type="password" placeholder="Parol" />
        <LoginButton onClick={handleLogin}>Kirish</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;