import React from "react";
import { Link } from "react-router-dom";
export default function Button({ to, className, direction, children, icon }) {
  return (
    <>
      <Link to={to} className={className}>
        {direction === "left" ? <i class={icon}></i> : ""}
        {children}
        {direction === "right" ? <i class={icon}></i> : ""}
      </Link>
    </>
  );
}
