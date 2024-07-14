import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  //consume data
  const { count } = useAppSelector((state) => state.counter);

  // send data
  const dispatch = useAppDispatch();

  // Function to generate tally marks
  const renderTally = () => {
    const tallyMarkup = [];
    const groups = Math.floor(count / 5);
    const remainder = count % 5;

    for (let i = 0; i < groups; i++) {
      tallyMarkup.push(
        <div key={`group-${i}`} className="tally-group text-3xl relative">
          <span className="">||||</span>
          <span className="cross absolute left-1 -bottom-1 text-5xl rotate-12">
            /
          </span>
        </div>
      );
    }

    for (let i = 0; i < remainder; i++) {
      tallyMarkup.push(
        <span key={`remainder-${i}`} className="tally-mark text-3xl">
          |
        </span>
      );
    }
    console.log(tallyMarkup);
    return (
      <div className="tally-container flex gap-2 max-w-3xl mx-auto flex-wrap py-5">
        {tallyMarkup}
      </div>
    );
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex gap-10  items-center p-10 bg-slate-50 border border-purple-300 rounded-xl">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="rounded-lg font-semibold text-lg px-5 py-3 bg-green-500 text-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="rounded-lg font-semibold text-lg px-5 py-3 bg-orange-500 text-white"
        >
          Increment
        </button>
        <h3 className="font-bold text-3xl">{count}</h3>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-lg font-semibold text-lg px-5 py-3 bg-red-500 text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="rounded-lg font-semibold text-lg px-5 py-3 bg-purple-500 text-white"
        >
          Decrement by 5
        </button>
      </div>

      <div className="">{renderTally()}</div>
    </div>
  );
}

export default App;
