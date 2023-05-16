import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { decrementCounter, incrementCounter } from './action/actions';

function App(props) {
  const handleIncrement = () => {
    console.log('>>>> Check handleIncrement');
    props.incrementCounter()
  }

  const handleDecrement = () => {
    console.log('>>>> Check handleDecrement');
    props.decrementCounter()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Count: {props.count}</h1>
          <button onClick={() => handleIncrement()}>Increment</button>
          <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),

    decrementCounter: () => dispatch(decrementCounter())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)