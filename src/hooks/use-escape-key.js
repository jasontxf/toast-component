import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        callback(e);
      }
    }

    window.addEventListener("keyup", handleEscape);

    return () => {
      window.removeEventListener("keyup", handleEscape);
    };
  }, []);
}

export default useEscapeKey;
