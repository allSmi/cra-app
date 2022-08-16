import logo from './logo.svg';
import './App.css';
import { makeAutoObservable } from "mobx"
import { observer } from 'mobx-react';
import {useState} from 'react'

class Store {
  count = 0

  constructor() {
      makeAutoObservable(this)
  }

  increaseCount() {
      this.count += 1
  }
}

const store = new Store()

// isBad ------- begin -----------------------------------------
const App = function () {

  // toggle comments this line, the console will log error
  // const [test, setTest] = useState(0);

  return (
    <div className="App" onClick={() => {
      store.increaseCount()
    }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {store.count}
        </a>
      </header>
    </div>
  );
}

export default observer(App);
// isBad ------- end -----------------------------------------


// isGood -------- begin ---------------------------------------
// const App = observer(() => {

//   // toggle comments this line, isOk
//   // const [test, setTest] = useState(0);

//   return (
//     <div className="App" onClick={() => {
//       store.increaseCount()
//     }}>
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
//           Learn React {store.count}
//         </a>
//       </header>
//     </div>
//   );
// })

// export default App
// isGood -------- end ----------------------------------------