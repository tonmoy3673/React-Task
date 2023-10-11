import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h3> Counter : {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      </div>
    </div>
  );
};

export default Counter;
