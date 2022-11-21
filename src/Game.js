import React from "react";
import { Question } from "./Question";
import { PokemonFighting } from "./PokemonFighting";
import { Score } from "./Score";
import { FinalScore } from "./FinalScore";
import { PlayAgain } from "./PlayAgain";

export class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemonOne: {name:"", spriteSrc:"", attack:0},    
            pokemonTwo: {name:"", spriteSrc:"", attack:0},
            score: 0,
            gameOver: false
        }
        this.pokemonOneStronger= this.pokemonOneStronger.bind(this);
        this.pokemonTwoStronger= this.pokemonTwoStronger.bind(this);
        this.generateTwoRandomPokemon = this.generateTwoRandomPokemon.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.pokeOneClicked = this.pokeOneClicked.bind(this);
        this.pokeTwoClicked=this.pokeTwoClicked.bind(this);
        this.restartGame=this.restartGame.bind(this);
    }

    generateTwoRandomPokemon(){
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const randNumOne = Math.floor(Math.random()*905)+1;
        const randNumTwo = Math.floor(Math.random()*905)+1;
        const endpointOne = `${url}${randNumOne}`;
        const endpointTwo = `${url}${randNumTwo}`;
        fetch(endpointOne).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            console.log(jsonResponse.stats[1].base_stat)
            this.setState({pokemonOne:{name:jsonResponse.name, spriteSrc:jsonResponse.sprites.front_default, attack:jsonResponse.stats[1].base_stat}});
           
        })
        fetch(endpointTwo).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            console.log(jsonResponse.stats[1].base_stat);
            this.setState({pokemonTwo:{name:jsonResponse.name, spriteSrc:jsonResponse.sprites.front_default, attack:jsonResponse.stats[1].base_stat}});
           
        })

    }
   componentDidMount(){
    this.generateTwoRandomPokemon();
   }

    render(){
        if(!this.state.gameOver){
        return(
            <div>
                <Question/>
                <PokemonFighting onPokeOneClicked={this.pokeOneClicked} onPokeTwoClicked={this.pokeTwoClicked}
                pokemonOne={this.state.pokemonOne} pokemonTwo={this.state.pokemonTwo}/>
                <Score score = {this.state.score}/>
            </div>
        );}
        else if(this.state.gameOver){
               return(
                <div>
                <FinalScore score={this.state.score}/>
                <PlayAgain onClick={this.restartGame}/>
                </div>
               );
        }
    }

    pokemonOneStronger(){
        if(this.state.pokemonOne.attack>=this.state.pokemonTwo.attack){
            return true;
        }
        else if(this.state.pokemonOne.attack<this.state.pokemonTwo.attack)
        return false;
    }
    pokemonTwoStronger(){
        if(this.state.pokemonTwo.attack>=this.state.pokemonOne.attack){
            return true;
        }
        else if(this.state.pokemonTwo.attack<this.state.pokemonOne.attack)
        return false;
    }

    changeScore(){
        this.setState((state, props) => ({
            score: state.score + 1
          }));
    }

    pokeOneClicked(){
        const pokeOneStronger = this.pokemonOneStronger();
        if(pokeOneStronger){
            this.changeScore();
            this.generateTwoRandomPokemon();
        }
        else{
            this.setState({gameOver:true});
        }
    }

    pokeTwoClicked(){
        const pokeTwoStronger = this.pokemonTwoStronger();
        if(pokeTwoStronger){
            this.changeScore();
            this.generateTwoRandomPokemon();
        }
        else{
            this.setState({gameOver:true});
        }
    }

    restartGame(){
        this.generateTwoRandomPokemon();
        this.setState({
            score:0,
            gameOver:false
        })
    }
    
}



