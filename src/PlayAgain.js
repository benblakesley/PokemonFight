import React from "react";


export class PlayAgain extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return (
            <button onClick={this.handleClick}>Play Again</button>
        )
    }

    handleClick(){
        this.props.onClick();
    }
}