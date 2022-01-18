import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>
        COUNT IS <code>{count}</code>
      </p>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  );
}

export default App;
