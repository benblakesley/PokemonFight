import React from "react";

export class Pokemon extends React.Component{


    render(){
        return(
            
                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                        
                             <img className="rounded mx-auto d-block" src={this.props.pokeSpriteSrc}/>
                             <p className="text-center">{this.props.pokeName} </p>
            
                        </div>
                    </div>
                </div>
        




            // <div >
            //     <img src={this.props.pokeSpriteSrc}/>
            //     <p>{this.props.pokeName} </p>
            // </div>
        );
    }
}