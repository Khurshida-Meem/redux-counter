import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  // need to pass function in useSelector
  // I will get the data automatically when changes may happen in any state. So I always have the latest counter. If I unMount the component, remove from the DOM react redux will autometically clear the subscription.
  const counter = useSelector(state => state.counter);

  const handleIncrement = () => {
    dispatch({type: 'increment'})
  }

  const handleIncrese = () => {
    dispatch({type: 'increse', amount: 5})
  }

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrese}>Increse by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
