import React, {useState} from 'react'

function Practice() {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            password2: "",
            okayToEmail:false
        }
    )

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password !== formData.password2){
            console.log("passwords to not match")
            return
        }
        console.log("Successfully signed up")
        if(formData.okayToEmail) {
            console.log("Thanks for signing up for our newsletter!")
        }
        
    }

    function handlerChange(event){
        const {name,value, type, checked} = event.target;

        setFormData( prevState => {
            return{
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }
        }) 

    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name='email'
                    onChange={handlerChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name='password'
                    onChange={handlerChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name='password2'
                    onChange={handlerChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={handlerChange}
                        value= {formData.okayToEmail}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Practice