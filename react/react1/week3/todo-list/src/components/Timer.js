import { useState, useEffect } from "react";
const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);
  return <p>You have used {count} seconds on this website</p>;
};
export default Timer;
