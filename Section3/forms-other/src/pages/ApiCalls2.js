import React, {useEffect, useState} from 'react'

function ApiCalls2() {
    const [starWarsData, setStarWarsData] = useState({});
    console.log("Component rendered")

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
    useEffect(function(){
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, []) // this will run after return is painted.

    return (
    <div className="form-container">
        <h1>API Calls in React (Correct Way)</h1>
        <p>{JSON.stringify(starWarsData, null, 2)}</p>
    </div>
  )
}

export default ApiCalls2