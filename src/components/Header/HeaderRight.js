import React from "react";
import { Link } from 'react-router-dom';
export default function Headerright(props) {
  return (
    <>
      <div className="header__right">
        <Link to="/" className="search-switch"><span className="icon_search"></span></Link>
        <Link to="/login"><span className="icon_profile"></span></Link>
      </div>
    </>
  );
}
