
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
            <div>
            <div style={{display:"inline-block", float:"left"}}  onClick={this.handleClickOne}>
                <Pokemon pokeSpriteSrc = {this.props.pokemonOne.spriteSrc} pokeName = {this.props.pokemonOne.name}/></div>
            <div style={{display:"inline-block", float:"right"}} onClick={this.handleClickTwo}>
                <Pokemon pokeSpriteSrc = {this.props.pokemonTwo.spriteSrc} pokeName = {this.props.pokemonTwo.name}/></div>
            </div>
        );
    }
}