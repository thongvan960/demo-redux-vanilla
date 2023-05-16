import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { decrementCounter, incrementCounter } from './action/actions';

function App(props) {

  const count = useSelector((state) => {
    return state.counter.count
  })

  const dispatch = useDispatch()
  const handleIncrement = () => {
    console.log('>>>> Check handleIncrement');
    dispatch(incrementCounter())
  }

  const handleDecrement = () => {
    console.log('>>>> Check handleDecrement');
    dispatch(decrementCounter()) 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => handleIncrement()}>Increment</button>
          <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;