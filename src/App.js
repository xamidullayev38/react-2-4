import { Routes, Route, Navigate } from "react-router-dom";
import { createContext, useState } from "react";

import AdminLayout from "./layouts/AdminLayout";
import Orders from "./pages/Orders";
import Delivered from "./pages/Delivered";
import Statistics from "./pages/Statistics";
import Add from "./pages/Add";
import Users from "./pages/Users";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const AuthContext = createContext({
  isLogin: false,
  setLogin: () => {},
});

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setLogin }}>
      <Routes>
        <Route
          path="/login"
          element={
            isLogin ? <Navigate to="/" /> : <Login />
          }
        />

        <Route
          path="/"
          element={
            isLogin ? <AdminLayout /> : <Navigate to="/login" />
          }
        >
          <Route element={<Orders />} />
          <Route path="orders" element={<Orders />} />
          <Route path="delivered" element={<Delivered />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="add" element={<Add />} />
          <Route path="users" element={<Users />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default App;
