import React from "react";

export class Question extends React.Component{

    render(){
        return(
            <div style={{color: "red", textAlign: "center"}}>
            <h1>Pokemon Fight</h1>
            <p>Based on the basic attack stat, which pokemon is stronger?</p>
            </div>
        );
    }
}