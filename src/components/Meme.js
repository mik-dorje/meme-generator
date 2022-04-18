import React from "react";
import money from "../images/newmoney.png" ;
import MemesData from "../MemesData";

export default function Meme(){

    // const [memeImage, setImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    // function getMemeImage(){
    //     const memesArray = MemesData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     setImage(memesArray[randomNumber].url)  
    // }
    
    
    
    const [meme, setMeme]= React.useState({
        topText: "",
        bottomText: "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })


    
    //To fetch meme images using api ----https://api.imgflip.com/get_memes
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(info => setAllMemes(info.data.memes))
    })



    function getMemeImage(){

        // for using MemesData.js
        // const memesArray = MemesData.data.memes
        // const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        
        
        // for using allMemes from api
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme=>{
            return(
                {
                    ...prevMeme,
                    topText: "",
                    bottomText: "",
                    
                    randomImage: url
                }
            )
        })  
    }
    
    // const [startValue, setFunc] = React.useState(true)
    // function secondHandler(){
    //     setFunc(function(startValue){
    //         return !startValue
    //     })
    // }
    // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    //         function addItem(){
    //             setThingsArray(function(prevThingsArray){
    //                 return [...prevThingsArray, `Thing ${prevThingsArray.length+1}`]
    
    //             })
    //         }

    // --------------------------------------------------------------------------------
    
// const thingsElements = thingsArray.map(thing =><p key={thing}>{thing} </p>) 

    // function handleTopText(event){
    //     // console.log(event.target.value)
    //     setMeme(function(prev){
    //         return{...prev, topText : event.target.value }
    //     })
    // }
    // function handleBottomText(event){
    //     setMeme(function(prev){
    //         return {...prev, bottomText : event.target.value}
    //     })
    // }


    function handleChange(event){
        // console.log(event.target.value)

        // const {name , value} = event.target
        //this destructring helps in easier interpretition especially when it has radio and checkbox
        setMeme(function(prev){
            return {
                    ...prev, 
                    [event.target.name] : event.target.value
                    // [name] : value
                }
        })
    }


  






    return(
        <div className="input-section">
            <div className="inputbox">
                <input
                    type="text"
                    className="textbox"
                    // placeholder="Enter first text line"
                    // onChange={handleTopText}>
                    onChange={handleChange}
                    name = "topText"
                    //keep this same as the property in object in react.usestate statement
                    value = {meme.topText}
                    >
                </input>
                <input
                    type="text"
                    className="textbox"
                    // placeholder="Enter second text line"
                    // onChange={handleBottomText}
                    onChange={handleChange}
                    name = "bottomText"
                    value = {meme.bottomText}
                    >
                    </input>
            </div>


            {/* <h2>{startValue? "Yes" : "No"}</h2>
            <button
                className="meme-btn"
                onClick={secondHandler}
                >
                    Click me 
            </button> */}


            {/* {thingsElements}
            <button
                className="meme-btn"
                onClick={addItem}
                >
                    Click me 
            </button> */}


            <button
                className="meme-btn"
                onClick={getMemeImage}
                >
                    Get a new meme image
            </button>

            <div className="image-box">
                <h2 className="topBottom top">{meme.topText}</h2>
                <h3 className="topBottom bottom">{meme.bottomText}</h3>
                <img src={meme.randomImage} className="meme-img" />
                
            </div>


            <div className="rough">
                
            </div>


        </div>
    )
}