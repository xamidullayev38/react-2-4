// layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styled from "styled-components";



function AdminLayout() {
  return (
    <div className="d-flex vh-100">
      <Sidebar className="position-sticky top-0" />
      <div className="flex-grow-1 overflow-auto ">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
