import { useState } from "react";

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
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <h2>
        Count is {isZero && <h3 style={{ color: 'red' }}> zero</h3>}
        {isNegative && <h3 style={{ color: 'blue' }}> negative</h3>}
        {!isZero && !isNegative && <h3 style={{ color: 'green' }}> {isEven ? "even" : "odd"}.</h3>}
      </h2>
    </div>
  );
}
export default Counter;
