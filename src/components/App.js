// create your App component here
import React, { useEffect, useState } from "react";

function App(){
    const[dogPics, setDogPics] = useState()
    const[isLoaded, setIsLoaded] = useState(false)


    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=> response.json())
        .then((data)=>{
            setDogPics(data.message)
            setIsLoaded(true)
        },[])
    })

    if(!isLoaded) return <p>Loading...</p>
    return <img src={dogPics} alt="A Random Dog"></img>
}

export default App