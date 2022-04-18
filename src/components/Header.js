import React from "react";
import logo from "../images/newlogo.png" ;

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h2>Meme Generator</h2>
            </div>
            <h3>React Course - Project 3</h3>
        </div>
    )
}