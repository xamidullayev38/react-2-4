// import {FaUserCircle} from 'react-icons';

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { useContext } from "react";

function Header() {
  const { isLogin, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
      <button className="btn ">☰</button>
      <div className="d-flex justify-content-end align-items-center gap-2">
        <span>Axror</span>
        <div>
          {isLogin ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                setLogin(false);
                navigate("/login");
              }}
            >
              Log out
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
