import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => setCount(count + 1), 1000);
    return () => clearTimeout(time);
  }, [count]);

  return <p>You have used {count} seconds on this website</p>;
};

export default Timer;
