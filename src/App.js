import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Orders from "./pages/Orders";
import Delivered from "./pages/Delivered";
import Statistics from "./pages/Statistics";
import Add from "./pages/Add";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/orders" element={<Orders />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/add" element={<Add />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
