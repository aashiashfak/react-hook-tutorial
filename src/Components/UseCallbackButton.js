import React from "react";

function UseCallbackButton({handleClick, children}) {
    console.log('Renderng button - ',children);
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(UseCallbackButton);

