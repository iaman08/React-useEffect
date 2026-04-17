import { useEffect, useState } from "react";

function Dick(){

    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState("");
    function getRandomInt(){
        return Math.floor(Math.random()*1000* 9)/1000;
         }
         const handleChange= (event) => {
            setName(event.target.value);
         }

    return(
        <div>
           <input type="text" placeholder="Your Name" value={name} onChange={handleChange}/>
           <button onClick={()=>setCount(getRandomInt())}>Search</button>
           <h1>{name} dick size is: {count} inch</h1>
        </div>
    )
}

export default Dick;