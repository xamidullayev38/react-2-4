// components/SidebarLink.jsx
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items:center;
  gap: 10px;
  padding: 12px 14px;
  margin-bottom: 6px;
  border-radius: 8px;
  text-decoration: none;
  color: #000;
  font-size: 14px;

  &.active {
    background: #ffeb00; /* sariq */
    font-weight: 600;
  }
`;

export default SidebarLink;
