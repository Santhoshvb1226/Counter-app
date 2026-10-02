import { useState } from "react";
import "./Counter.css";

const MIN = 0;

export default function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(MIN, prev - 1)); // never below zero
  const reset = () => setCount(0);

  const atMinimum = count === MIN;

  return (
    <main className="counter">
      <h1 className="counter__title">Counter</h1>

      <p className="counter__value" aria-live="polite">
        {count}
      </p>

      {/* Conditional rendering */}
      {atMinimum && <p className="counter__message">Minimum limit reached</p>}

      <div className="counter__buttons">
        <button onClick={decrement} disabled={atMinimum} className="btn btn--decrement">
          Decrement
        </button>
        <button onClick={reset} className="btn btn--reset">
          Reset
        </button>
        <button onClick={increment} className="btn btn--increment">
          Increment
        </button>
      </div>
    </main>
  );
}