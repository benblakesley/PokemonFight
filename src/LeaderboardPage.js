import { Leaderboard } from "./Leaderboard";
import { useState, useEffect } from "react";
import { checkSessionValid, getAll } from "./HelperHttpFunctions";
import { LeaderboardLinks } from "./LeaderboardLinks";


export const LeaderboardPage = (props)=>{

    const [users, setUsers] = useState([]);
    const [activeSession, setActiveSession] = useState();

    useEffect(()=>{
        checkSessionValid().then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            setActiveSession(jsonResponse);
        })
    })
   
    useEffect(()=>{
       getAll().then(response=>{
         return response.json();
       }
       ).then(jsonResponse=>{
         return jsonResponse.sort(sortByScore);
 
       }).then(
         sortedUsers=>{
           setUsers(sortedUsers);
         }
       )
    },[]);
 
    const sortByScore = (playerA, playerB) =>{
      const scoreA = playerA.score;
      const scoreB = playerB.score;
 
      if(scoreA >= scoreB){
        return -1;
      }
      else if(scoreA<scoreB){
        return 1;
      }
 
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Leaderboard</h1>
            </div>
            </div>
            <LeaderboardLinks activeSession={activeSession}/>
            <Leaderboard users={users}/>
        </div>
    )
}