import logo from './logo.svg';
import React from "react";
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/orders/1")
      // .then((res) => console.log(res.json()));
      .then((res) => res.json())
      // .then((data) => setData(data.message));
      // .then((data) => console.log(data))
      .then((data) => setData(data.source));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
