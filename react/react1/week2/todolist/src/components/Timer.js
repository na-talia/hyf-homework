import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);
  return <div>You have used {count} seconds on this website</div>;
};
export default Timer;
