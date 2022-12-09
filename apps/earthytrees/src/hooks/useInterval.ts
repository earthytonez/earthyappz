import React from "react";

const { useEffect, useRef } = React;

/* Thanks Dan Abramov  for useInterval hook
 https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/
function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function | undefined>();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
