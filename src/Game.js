import React from "react";
import { Question } from "./Question";
import { PokemonFighting } from "./PokemonFighting";
import { Score } from "./Score";
import { FinalScore } from "./FinalScore";
import { PlayAgain } from "./PlayAgain";
import { useState } from "react";
import { useEffect } from "react";
import { SignOut } from "./SignOut";
import { getCurrentUser, getHighScore, setHighScore } from "./HelperHttpFunctions";
import { GoToLeaderboard } from "./GoToLeaderboard";

export const Game = (props) => {

    const [pokemonOne, setPokemonOne] = useState({name:"", spriteSrc:"", attack:0});
    const [pokemonTwo, setPokemonTwo] = useState({name:"", spriteSrc:"", attack:0});
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [username, setUsername] = useState("");
   

    const generateTwoRandomPokemon = () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const randNumOne = Math.floor(Math.random()*905)+1;
        const randNumTwo = Math.floor(Math.random()*905)+1;
        const endpointOne = `${url}${randNumOne}`;
        const endpointTwo = `${url}${randNumTwo}`;
        fetch(endpointOne).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            setPokemonOne({name:jsonResponse.name, spriteSrc:jsonResponse.sprites.front_default, attack:jsonResponse.stats[1].base_stat});   
        })
        fetch(endpointTwo).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            setPokemonTwo({name:jsonResponse.name, spriteSrc:jsonResponse.sprites.front_default, attack:jsonResponse.stats[1].base_stat});
        })

    }
    
    useEffect(()=>{
        generateTwoRandomPokemon();
    }, [])

    useEffect(()=>{
        currentSessionUser();
    }, [])

    useEffect(()=>{
        handleHighScore();
    }, [gameOver])

    const handleHighScore = ()=>{
        getHighScore(username)
        .then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            if(score > jsonResponse){
                setHighScore(username, score);
            }
        }
        );
    }

    const currentSessionUser = ()=>{
        getCurrentUser()
        .then(response=>{
            return response.text();
        }).then(textResponse=>{
            setUsername(textResponse);
        })
    }
    
  
    

    const pokemonOneStronger = () => {
        if(pokemonOne.attack>=pokemonTwo.attack){
            return true;
        }
        else if(pokemonOne.attack<pokemonTwo.attack)
        return false;
    }
    const pokemonTwoStronger = () => {
        if(pokemonTwo.attack>=pokemonOne.attack){
            return true;
        }
        else if(pokemonTwo.attack<pokemonOne.attack)
        return false;
    }

    const changeScore = () => {
        setScore(score + 1);
    }

    const pokeOneClicked = () => {
        if(pokemonOneStronger()){
            changeScore();
            generateTwoRandomPokemon();
        }
        else{
            setGameOver(true);
        }
    }

    const pokeTwoClicked = () => {
        if(pokemonTwoStronger()){
            changeScore();
            generateTwoRandomPokemon();
        }
        else{
            setGameOver(true);
        }
    }

    const restartGame = () => {
        generateTwoRandomPokemon();
        setScore(0);
        setGameOver(false);
    }

    if(!gameOver){
        return(
            <div>
                <Question/>
                <PokemonFighting onPokeOneClicked={pokeOneClicked} onPokeTwoClicked={pokeTwoClicked}
                pokemonOne={pokemonOne} pokemonTwo={pokemonTwo}/>
                <Score score = {score}/>
            </div>
        );}
        else if(gameOver){
               return(
                <div>
                <FinalScore score={score}/>
                <PlayAgain onClick={restartGame}/>
                <SignOut/>
                <GoToLeaderboard/>
                </div>
               );
        }
    
}



