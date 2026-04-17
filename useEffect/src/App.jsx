import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  

  useEffect(()=>{
   const time_interval = setInterval(()=>{
     setCount(prevcount => prevcount + 1);
    },1000);
 
    return () => {
      clearInterval(time_interval);
    };
   },[]);

  return(
    <div>
      <h3>Value is: {count}</h3>
    </div>
  )
}

export default App;
