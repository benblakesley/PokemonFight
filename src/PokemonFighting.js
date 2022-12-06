
import React from "react";
import { Pokemon } from "./Pokemon";

export const PokemonFighting = (props) => {

    const handleClickOne = (e) => {
            props.onPokeOneClicked();
    }

    const handleClickTwo = (e) => {
        props.onPokeTwoClicked();
    }


        return(
            <div className="container">
                <div className="row">
                    <div className="col">
            <div onClick={handleClickOne}>
                <Pokemon pokeSpriteSrc = {props.pokemonOne.spriteSrc} pokeName = {props.pokemonOne.name}/></div>
                    </div>
                    <div className="col">
            <div onClick={handleClickTwo}>
                <Pokemon pokeSpriteSrc = {props.pokemonTwo.spriteSrc} pokeName = {props.pokemonTwo.name}/></div>
                </div>
            </div>
            </div>
        );
}