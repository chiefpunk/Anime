import React from "react";

export default function FormInput({placeholder, type, icon, name}) {
  return (
    <>
      <div className="input__item">
        <input type={type} name={name} placeholder={placeholder} />
        <span className={icon}></span>
      </div>
    </>
  );
}
