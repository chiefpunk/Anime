import React from "react";
import Logo from "components/Logo";
import Menu from "components/Menu";

export default function Footer(props) {
  const footerMenu = [
    { to: "/", label: "Homepage", submenu: [] },
    {
      to: "/",
      label: "Categories",
      submenu: [],
    },
    { to: "/", label: "Our Blog", submenu: [] },
    { to: "/", label: "Contacts", submenu: [] },
  ];
  return (
    <>
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton">
            <span className="arrow_carrot-up"></span>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <Logo />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <Menu menu={footerMenu} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
