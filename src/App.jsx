import Carosel from "./components/Carosel";
import posts from "../posts"
import { useState, useEffect } from "react";
import Bullets from "./components/Bullets";
function App() {

  const [ currVisible, setCurrVisible ] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrVisible((c) => (c + 1 >= posts.length ? 0 : c + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [posts.length]);
  

  return (
    
    
    <> 
    <button onClick={()=>setCurrVisible(c => c === 0 ? c=posts.length-1 : c-1)}>indietro</button>
    <button onClick={()=>setCurrVisible(c => posts.length-1 === c ? c=0 : c+1)}>avanti</button>
    {posts.map((p,index)=>(
       <Bullets
       key={`bullet${index}`}
       isFull={currVisible === index}
       onClickVisible={()=>setCurrVisible(index)}
       > </Bullets>
    ))}
    {posts.map((p)=>(
       <Carosel
        key={`post${p.id}`}
        title={p.title}
        image={p.image}
        isVisible={currVisible === p.id}
       > </Carosel>
    ))}
   
    </>
  )
}

export default App
