import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const mystate = useSelector((state) => state.incrementDecrement);
  const dispatcher = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using react and redux</h4>
      <div class="quantity">
        <a
          class="quantity__minus"
          title="Decrement"
          onClick={() => dispatcher(decrement(5))}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          class="quantity__input"
          value={mystate}
        />
        <a
          class="quantity__plus"
          title="Increment"
          onClick={() => dispatcher(increment(5))}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
