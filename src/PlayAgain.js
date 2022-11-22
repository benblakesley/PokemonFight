import React from "react";


export class PlayAgain extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5">
            <button type="button" className="btn btn-danger" onClick={this.handleClick}>Play Again</button>
                     </div>
                 </div>
            </div>
        )
    }

    handleClick(){
        this.props.onClick();
    }
}