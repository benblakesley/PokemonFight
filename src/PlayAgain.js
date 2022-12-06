import React from "react";


export const PlayAgain =(props) => {
 


    const handleClick = () => {
        props.onClick();
    }

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5">
            <button type="button" className="btn btn-danger" onClick={handleClick}>Play Again</button>
                     </div>
                 </div>
            </div>
        )
}
