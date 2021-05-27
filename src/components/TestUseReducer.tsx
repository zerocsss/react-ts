import { useReducer, useEffect, useRef } from "react";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter(props: {timerMs: number}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {timerMs} = props;

  // ref 的2种用法
  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {

    if (!divRef.current) throw Error('divRef is not assigned')

    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs])

  return (
    <div ref={divRef}>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </div>
  );
}
