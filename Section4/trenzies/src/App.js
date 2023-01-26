import React, {useEffect, useState} from 'react'
import Die from './components/Die';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [roles, setRoles] = useState(0)

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }

  function allNewDice(){
    const arr= []

    for (let i=0; i<10; i++){
      const randomNumber = Math.floor(Math.random() * (7 - 1) + 1)
      
      arr.push({ 
        value: randomNumber, 
        isHeld: false,
        id: nanoid()
      })
    }
    return arr
  }
  
  const rollDice = () => {
    if (!tenzies){
      setRoles( oldRoles => oldRoles + 1)
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
      }))
    }else{
      setTenzies(false)
      setDice(allNewDice())
      setRoles(0)
    }
    
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} 
              : die
    }))
  }
  
  const dicesElement = dice.map( die => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}
    />
  )) 
  
  useEffect(() =>{
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }

  },[dice])

  return (
    <main>
      {tenzies ? <Confetti/> : null}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {dicesElement}
      </div>
      <button onClick={rollDice} className='roll-dice'>{tenzies ? 'New Game': 'Roll'}</button>
      <p className="instructions mt">Number of Rolls: {roles}</p>
    </main>
  )
}

export default App