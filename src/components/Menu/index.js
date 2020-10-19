import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu({ menu, params }) {
  const location = useLocation();
  const path = location.pathname.slice(1);
  
  const active = (item) => {
    return path === item.label.toLowerCase()
      ? "active"
      : path === "" && item.label === "Homepage"
      ? "active"
      : "";
  };
  const menuItem = (item) => {
    return (
      <li key={item.label} className={active(item)}>
        <Link to={item.to}>
          {item.label}
          {item.submenu.length > 0 ? (
            <span className="arrow_carrot-down"></span>
          ) : (
            []
          )}
        </Link>
        {item.submenu.length > 0 ? subMenuItem(item.submenu) : []}
      </li>
    );
  };
  const subMenuItem = (subItem) => {
    return (
      <ul className="dropdown">
        {subItem.map((item) => (
          <li key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  };
  return <ul>{menu.map((item) => menuItem(item))}</ul>;
}

export default Menu;
