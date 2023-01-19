import React, {useState, useEffect} from 'react'

function Meme() {
    

    const [meme, setMeme] = useState({
        topText:'',
        bottomText:'',
        randomImage:''
    });

    const [allMemeImages, setAllMemeImages] = useState([]);

    const clickHandler = () => {
        const memesArray = allMemeImages;
        const randomNumber = Math.floor(Math.random() * memesArray.length);

        setMeme((prevObj => {
            return {
                ...prevObj,
                randomImage: memesArray[randomNumber].url
            }
        }))
    }

    function handlerChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        console.log("Effect run")
        getMemes()

        //equals ... below
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(data => setAllMemeImages(data.data.memes))
    },[])

    return (
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    className='form--input' 
                    placeholder='Top Text'
                    name="topText"
                    value={meme.topText}
                    onChange={handlerChange}
                />

                <input 
                    type="text" 
                    className='form--input' 
                    placeholder='Bottom Text'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handlerChange}
                />

                <button className='form--button' onClick={clickHandler}>Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                {meme.randomImage && <img src={meme.randomImage} className="meme--image" alt='meme'/>}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>            
        </main>
    )
}

export default Meme