import React from "react";

export class Pokemon extends React.Component{


    render(){
        return(
            <div >
                <img style={{height:"150px", width:"150px"}}src={this.props.pokeSpriteSrc}/>
                <p>{this.props.pokeName} </p>
            </div>
        );
    }
}