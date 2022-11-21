import React from "react";


export class FinalScore extends React.Component{


    render(){
        return(<h1>
        You scored {this.props.score}
        </h1>);
    }

}