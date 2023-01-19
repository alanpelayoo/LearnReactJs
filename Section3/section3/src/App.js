
// React by default does not take monitar change in local vars, we have to use states.
// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]
//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
//   function addItem() {
//       const newThingText = `Thing ${thingsArray.length + 1}`
//       thingsArray.push(newThingText)
//       console.log(thingsArray)   
//   }

//   return (
//     <div className="App">
//       <div>
//         <button onClick={addItem}>Add Item</button>
//         {thingsElements}
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import boxes from './boxes';
import Box from './components/Box';

export default function App(props) {
  
  const [count, setCount] = React.useState(0)
  /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
  const add = () =>{
    setCount( prev => prev +1)
  }
  
  const rest = () =>{
    setCount(prev => prev - 1)
  }

  // Objects
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  const addItem = () =>{
    setThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  console.log("App component rendered")

  // Boxes
  const [squares, setSquares] = React.useState(boxes);
  
  const toggle = (id) => {
    setSquares(prevSquares => {
      const newSquares = prevSquares.map((item) => {
        if (id === item.id){
          return {
            ...item,
            on: !item.on
          }
        }else{
          return item
        }
      })
      return newSquares
    })
  }

  console.log(squares)
  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} clickHandler={toggle}  id={square.id} /> //or toggle={() => toggle(square.id)}
  ))

  return (
    <div>
      <div className="counter section">
          <button className="counter--minus" onClick={rest}>–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
      
      {/* Complex State: Arrays */}
      <div className="section">
          <h2> Complex State: Arrays</h2>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
      
      <div className="section">
        <h2> Squares Activity</h2>
        {squareElements}
      </div>
    </div>
      
  )
}