import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
    {
      name: "My Posts",
      path: "/my-posts",
      active: authStatus,
    },
    {
      name: "Logout",
      path: "/logout",
      active: authStatus,
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus,
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
  ];

  return (
    <ul className="text-light-secondary-600 flex gap-10">
      {navItems.map((item) =>
        item.active ? (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ) : null,
      )}
    </ul>
  );
}

export default Navbar;
