import React from "react";

export class Login extends React.Component{

    constructor(props){
        super(props)
        this.handleOnChange=this.handleOnChange.bind(this);
    }

    handleOnChange(e){
            /*this function should send http requests to the backend to check 
            if the username is available or has been taken
            If the username has been taken then the form can not be submitted.
            If the username is not taken then the form can be submitted and the
            inputted username will be extracted and used as the username state of the game
             */
    }

    render(){
        return(
        <div>
        <form>
        <input value='' onChange={this.handleOnChange}></input>
        <input type = "submit"> </input>
        </form>
        <button>{/*  This does not need to be a button but should 
        handle the case where no username is input and then the username state is 
        saved as an empty string */}</button>
        </div>
        );
    }

}