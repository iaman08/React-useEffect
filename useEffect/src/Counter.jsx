import { useEffect, useState } from "react";

function Counter(){

    const [ count, setCount ] = useState(0);

    function getRandomInt(){
        return Math.floor(Math.random()*1000* 9)/1000;
        
         }

    return(
        <div>
           <h1>Your dick size is: {count} inch</h1>
           <button onClick={()=>setCount(getRandomInt())}>Search</button>
        </div>
    )
}

export default Counter;