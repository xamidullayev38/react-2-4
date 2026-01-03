import SidebarLink from "./SidebarLinjks";
import logo from "../assets/img/logo.png";
import styled from "styled-components";
import orders from "../assets/img/chart-donut.png";
import users from "../assets/img/users.png";
import add from "../assets/img/add.png";
import checked from "../assets/img/checked.png";
import stat from "../assets/img/chart-bar.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 400px;
  background: #fffbea;
  height: 100vh;
  padding: 16px;
  text-align: center;
`;
const Text = styled.p`
  color: orange;
`;

function Sidebar() {
  return (
    <Wrapper>
      <Link to={'/'}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "180px", marginBottom: "20px" }}
        />
      </Link>

      <SidebarLink to="/orders">
        <img src={orders} alt="" />
        <div className="text-start">
          <div>Arizalar</div>
          <small>Yetib kelgan arizalarni kuzatishingiz mumkin</small>
        </div>
      </SidebarLink>

      <SidebarLink to="/delivered">
        <img src={checked} alt="" />
        <div className="text-start">
          <div>Yetkazilgan</div>
          <small>Yetkazilgan taomlar ro‘yxati</small>
        </div>
      </SidebarLink>

      <SidebarLink to="/statistics">
        <img src={stat} alt="" />
        <div className="text-start">
          <div>Statistika</div>
          <small>Diagrammalar bilan ishlangan statistika</small>
        </div>
      </SidebarLink>

      <SidebarLink to="/add">
        <img src={add} alt="" />
        <div className="text-start">
          <div>Qo‘shish</div>
          <small>Yangi kategoriya/taom qo‘shish</small>
        </div>
      </SidebarLink>

      <SidebarLink to="/users">
        <img src={users} alt="" />
        <div className="text-start">
          <div>Foydalanuvchilar</div>
          <Text>Rollarni biriktirishingiz mumkin</Text>
        </div>
      </SidebarLink>
    </Wrapper>
  );
}

export default Sidebar;
