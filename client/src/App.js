import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{!data ? 'Loading...' : data}</p>
    </div>
  );
}

export default App;
