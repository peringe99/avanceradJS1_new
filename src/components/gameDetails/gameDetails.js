import { useState } from "react";


const GameDetails = () => {


let [highscores, setHighscores] = useState();


fetch('../highscores.json').then(response => {
    return response.json();
  }).then(data => {
    setHighscores(data);
    // console.log(highscores[0].player);  
    
  }).catch(err => {
    
  });



   return (
     <div>
       <h1>Hello World</h1>
       <h1>  </h1>
     </div>
   );
 };
 
 export default GameDetails;
 