import React, {useState} from 'react'

function Main() {
    const [formData, setFormData] = useState(
        { 
          firstName:"", 
          lastName:"", 
          email:"", 
          comments:"",
          isFriendly: true,
          employment:"",
          favColor:""
        }
    )
    
      
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
            ...prevState,
            [name]: type === 'checkbox' ? checked : value 
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("submited")
        console.log(formData)
    }

    return (
        <div>
            <h1>Forms in React (Remember to controll components)</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Input Text</h2>
                    <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name = "firstName"
                    value={formData.firstName}
                    />
                    <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name= "lastName"
                    value={formData.lastName}
                    />
                    <input
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    name= "email"
                    value={formData.email}
                    />
                    <br />
                    <br />
                    <h2>Text Area</h2>
                    <textarea
                    placeholder="Comments"
                    onChange={handleChange}
                    name= "comments"
                    value={formData.comments}
                    />
                    <br />
                    <br />
                    <h2>Checkbox</h2>
                    <input 
                    type="checkbox" 
                    id="isFriendly" 
                    checked = {formData.isFriendly }
                    name="isFriendly"
                    onChange={handleChange}
                    />
                    <label htmlFor="isFriendly">Are you friendly?</label>
                    
                </div>
                <br />
                <h2>Fieldset with input radio</h2>
                <fieldset>
                    <legend>Current employment status</legend>
                    
                    <input 
                        type="radio"
                        id="unemployed"
                        name='employment'
                        value="unemployed"
                        onChange={handleChange}
                        checked={formData.employment === "unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name='employment'
                        value="part-time"
                        onChange={handleChange}
                        checked={formData.employment === "part-time"}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name='employment'
                        value="full-time"
                        onChange={handleChange}
                        checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />    
                </fieldset>
                <br/>
                <h2>Select Boxes</h2>
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="orange">Orange</option>
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Main