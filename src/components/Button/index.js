import React from "react";
import { Link } from "react-router-dom";
export default function Button({to,className, children}) {
  return (
    <>
      <Link to={ to } className={ className }>
        {children}
      </Link>
    </>
  );
}
