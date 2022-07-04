import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/CounterReducer";
const Counter = () => {
  const showCounter = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };

  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementCounter}>Decrement</button>
    </main>
  );
};

export default Counter;
