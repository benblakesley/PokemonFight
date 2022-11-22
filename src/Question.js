import React from "react";

export class Question extends React.Component{

    render(){
        return(
            <div>
                <div className="container">
                 <div className="row">
                        <div className="col">
                            <h1 className="text-center mt-5">Pokemon Fight</h1>
                            <p className="text-center mb-5">Based on the basic attack stat, which pokemon is stronger?</p>
                         </div>
                    </div>
                 </div>
             </div>
            

            // <div >
            // <h1>Pokemon Fight</h1>
            // <p>Based on the basic attack stat, which pokemon is stronger?</p>
            // </div>
        );
    }
}