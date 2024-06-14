import Carosel from "./components/Carosel";
import posts from "../posts"
import { useState } from "react";
function App() {

  const [ currVisible, setCurrVisible ] = useState(0);
  return (
    
    
    <> 
    <button onClick={()=>setCurrVisible(c => c === 0 ? c=posts.length-1 : c-1)}>indietro</button>
    <button onClick={()=>setCurrVisible(c => posts.length-1 === c ? c=0 : c+1)}>avanti</button>
  
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
