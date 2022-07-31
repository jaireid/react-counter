import './App.css';
import {useState} from 'react';
import Header from './Header';
import Item from './Item';

function App() {
  // console.log('Rendered');
  const [count, setCount] = useState(0);
  const items = ['qwerty', 'asdf', 'uiop', 'zxcvb'];
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Header />
      <p>You have clicked the button {count} times</p>
      <button onClick = {handleClick}>Click Me</button>
      {count > 5 ? <p>You clicked more than 5 times</p> : <p>You clicked me 5 or less times</p>}
      {items.map((item) => {
        return <Item text = {item}/>
      })}
    </div>
  );
}

export default App;
