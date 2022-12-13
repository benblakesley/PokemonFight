import React from "react";
import { useNavigate } from "react-router-dom";


export const GoToLeaderboard =(props) => {
 
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../leaderboard');
    }

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5">
            <button type="button" className="btn btn-info" onClick={handleClick}>Leaderboard</button>
                     </div>
                 </div>
            </div>
        )
}
