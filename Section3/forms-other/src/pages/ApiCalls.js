import React, {useState} from 'react'

function ApiCalls() {
    const [starWarsData, setStarWarsData] = useState({});
    // console.log("Component rendered")

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))

    return (
    <div className="form-container">
        <h1>API Calls in React (Re-renders infinte loop)</h1>
        <p>{JSON.stringify(starWarsData, null, 2)}</p>
    </div>
  )
}

export default ApiCalls