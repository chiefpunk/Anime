import React from "react";
import { useState } from "react";
export default function Preloader(props) {
  const [isLoading, setIsLoading] = useState(false);
  setInterval(() => {
    setIsLoading(true);
  }, 2000);
  return (
    <>
      <div id="preloder" className={isLoading === false ? "fadeIn" : "fadeOut"}>
        <div className="loader"></div>
      </div>
    </>
  );
}
