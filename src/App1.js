// import Welcome from './components/Welcome'
// import Profile from './components/Profile';
// import About from './components/About'
// import ClassCompo from './components/ClassCompo';
import { useState } from 'react';

import './App.css';


function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  return (

    <div className="App">
      <button onClick={decrement}>-</button>
      <sapn>{count}</sapn>
      <button onClick={increment}>+</button>

    </div>
  );
}

export default App;
