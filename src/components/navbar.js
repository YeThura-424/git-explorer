import React from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  return (
    <>
      <nav>
        <Link to="/" className="logo-nav">
          Git Explorer
        </Link>
        <div className="link-cont">
          <Link to="/">Repos</Link>
          <Link to="/users">Users</Link>
          <Link to="/search">Search</Link>
          <Link to="/auth-profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
