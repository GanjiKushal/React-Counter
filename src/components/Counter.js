import { useState } from "react";
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function getCountProperties(count) {
    return {
      isZero: count === 0,
      isNegative: count < 0,
      isEven: count % 2 === 0,
    };
  }

  const { isZero, isNegative, isEven } = getCountProperties(count);
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="counter-button" onClick={Increment}>Increase</button>
        <button className="counter-button" onClick={Decrement}>Decrease</button>
      </div>
      <h2>
        Count is: {isZero && <h3 style={{ color: "red" }}> zero</h3>}
        {isNegative && <h3 style={{ color: "blue" }}> negative</h3>}
        {!isZero && !isNegative && (
          <h3 style={{ color: "green" }}> {isEven ? "even" : "odd"}</h3>
        )}
      </h2>
    </div>
  );
}
export default Counter;
