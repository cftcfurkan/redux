import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, changePointByInput } from "./slices/numberSlice";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const number = useSelector((state) => state.number);
  const point = number.point;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }
  function handlePoint() {
    dispatch(changePointByInput(inputValue));
  }
  console.log(number);
  return (
    <div className="App">
      <h1>{number.value}</h1>
      <button onClick={handleClick}> +1 </button>
      <br/><br/><br/>

      <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />

      <div>{point}</div>
      <button onClick={handlePoint}>ChangeInput</button>
    </div>
  );
}

export default App;
