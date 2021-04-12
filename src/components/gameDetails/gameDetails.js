const GameDetails = () => {

    // Replace ./data.json with your JSON feed
 fetch('../games.json').then(response => {
     return response.json();
   }).then(data => {
     // Work with JSON data here
     console.log(data);
   }).catch(err => {
     // Do something for an error here
   });
 
   return (
     <div>
       <h1>Hello World</h1>
       <h1>This is the page for</h1>
     </div>
   );
 };
 
 export default GameDetails;
 