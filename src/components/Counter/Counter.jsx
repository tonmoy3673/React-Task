import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/Fa";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold"> Counter : {count}</h3>

        <div className="py-5">
          <button
            className="btn btn-circle me-5"
            onClick={() => setCount(count + 1)}
          >
            <FaPlus />
          </button>
          <button
            className="btn btn-circle"
            onClick={() => setCount(count - 1)}
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
