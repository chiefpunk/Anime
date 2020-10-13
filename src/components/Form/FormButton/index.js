import React from "react";

export default function FormButton({label, className, children}) {
  return (
    <>
      <button type="submit" className={className}>
        {children}
      </button>
    </>
  );
}
