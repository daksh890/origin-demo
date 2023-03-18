import React from "react";
import Logo from "./../../Assets/Logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

function Header({ user, admin, setUser, setAdmin }) {
  return (
    <div className="header">
      <div className="header-container">
        <div
          className="Logo"
          onClick={() => {
            setAdmin(false);
            setUser(false);
          }}
        >
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="Links">
          {admin && <Link to="/admin">Admin</Link>}
          {user && <Link to="/dashboard">Dashboard</Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;
