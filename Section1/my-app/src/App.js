import React, {useState} from 'react'

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [isLight, setIsLight] = useState(false)

  const buttonHandler = () => {
    setIsLight( prev => !prev)
  }
  console.log(isLight)

  return (
    <div className='container'>
      <Header handler={buttonHandler} light={isLight}/>
      <Main light={isLight} />
    </div>
  );
}

export default App;
