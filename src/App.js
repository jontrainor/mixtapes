import React, { useState } from 'react';
import './App.css';

function App() {
  const spotifyUserId = 'jon.trainor';

  return (
    <div>test spotify user id = {spotifyUserId}</div>
  );
}

// class App extends Component {
//   constructor() {
//   }
//   spotifyUserId = 'jon.trainor';
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
