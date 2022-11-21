import React from "react";

export class Score extends React.Component{

    render(){
        return(
            <p style={{textAlign:"center"}}>Score: {this.props.score}</p>
        )
    }
}