
import React from "react";
import { Pokemon } from "./Pokemon";

export class PokemonFighting extends React.Component{

    constructor(props){
        super(props);
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
    }

    handleClickOne(e){
            this.props.onPokeOneClicked();
    }

    handleClickTwo(e){
        this.props.onPokeTwoClicked();
    }

   
    render(){
     
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
            <div onClick={this.handleClickOne}>
                <Pokemon pokeSpriteSrc = {this.props.pokemonOne.spriteSrc} pokeName = {this.props.pokemonOne.name}/></div>
                    </div>
                    <div className="col">
            <div onClick={this.handleClickTwo}>
                <Pokemon pokeSpriteSrc = {this.props.pokemonTwo.spriteSrc} pokeName = {this.props.pokemonTwo.name}/></div>
                </div>
            </div>
            </div>
        );
    }
}