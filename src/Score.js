import React from "react";

export class Score extends React.Component{

    render(){
        return(
            <p className="text-center">Score: {this.props.score}</p>
        )
    }
}