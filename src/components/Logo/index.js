import React from "react";
import { Link } from 'react-router-dom';
export default function Logo(props) {
  return (
    <>
        <Link to="/">
          <img src={require("assets/img/logo.png")} alt="" />
        </Link>
    </>
  );
}
