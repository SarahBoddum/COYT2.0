import React from "react";


function FuldBilledeTxt({id, children }) {
  return (
    <div
      id={id} 
      className="fuldbillede"
    >
      {children}
    </div>
  );
}

export default FuldBilledeTxt;
