import React, { useState } from "react";
import { connect } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../app/counterSlice";
import styles from "./CounterConnect.module.css";

function Counter({
  count,
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
}) {
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(Number(incrementAmount) || 0)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: selectCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
    incrementAsync: (amount) => dispatch(incrementAsync(amount)),
  };
};

export const CounterConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
