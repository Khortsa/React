import {useState} from 'react';
import Users from './components/Users';


function App (){
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    const incrementCount = count + 1;
    setCount(incrementCount);

  }
  function decrementCount(){
    setCount((oldCount) => oldCount -1);
  }
  return(
    <div>
      <h1>Counter</h1>
      <h2>value: {count}</h2>
      <button  style = {{backgroundColor: 'green'}} onClick={(incrementCount)}>+</button>
      <button style = {{backgroundColor: 'red'}} onClick={(decrementCount)}>-</button>

<Users/>
    </div>
  )  
}
export default App;
