import React from "react";

export const Pokemon =(props) => {



    return(
                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                        
                             <img className="rounded mx-auto d-block" src={props.pokeSpriteSrc}/>
                             <p className="text-center">{props.pokeName} </p>
            
                        </div>
                    </div>
                </div>
        );
    }
