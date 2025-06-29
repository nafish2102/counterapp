import './App.css';
import ClassCounter from './Components/ClassCounter';
import FunctionCounter from './Components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <div className='counter-row'>
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
