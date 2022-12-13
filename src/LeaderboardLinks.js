import { useNavigate } from "react-router-dom"
import { SignOut } from "./SignOut";

export const LeaderboardLinks = (props)=>{

    const navigate = useNavigate();
    const playAgain = ()=>{
        navigate('../Game');
    }

    const goToLogin = ()=>{
        navigate('../login')
    }

    const goToSignUp =()=>{
        navigate('../signup');
    }
    if(props.activeSession){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5 ">
                        <button type="button" className="btn btn-primary" onClick={playAgain}>Play Again</button>
                    </div>
                    <div className="col">
                        <SignOut/> 
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div>
           <div className="container">
                <div className="row">
                    <div className="col text-center my-5">
                        <button type="button" className="btn btn-primary" onClick={goToLogin}>Sign In</button>
                    </div>
                    <div className="col text-center my-5">
                        <button type="button" className="btn btn-success" onClick={goToSignUp}>Sign Up</button>
                    </div>
                </div>
           </div>
        </div>
    )
}