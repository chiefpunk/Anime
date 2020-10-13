import React from "react";
import { Link } from "react-router-dom";
export default function SocialButton({ to, className, icon, children }) {
  return (
    <>
      <Link to={to} className={className}>
        <i className={icon}></i> {children}
      </Link>
    </>
  );
}
