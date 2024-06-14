import Carosel from "./components/Carosel";
import posts from "../posts"
import { useState, useEffect } from "react";
import Bullets from "./components/Bullets";
import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
} from 'react-icons/fa6';
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
    <div className="all-container">
    <button onClick={()=>setCurrVisible(c => c === 0 ? c=posts.length-1 : c-1)}><FaCircleArrowLeft/></button>
   
   <div className="carosel-container">
    <ul className="bullets">
      {posts.map((p,index)=>(
       <Bullets
       key={`bullet${index}`}
       isFull={currVisible === index}
       onClickVisible={()=>setCurrVisible(index)}
       > </Bullets>
    ))}
    </ul>
    
    {posts.map((p)=>(
       <Carosel
        key={`post${p.id}`}
        title={p.title}
        image={p.image}
        isVisible={currVisible === p.id}
       > </Carosel>
    ))}
    </div>
     <button onClick={()=>setCurrVisible(c => posts.length-1 === c ? c=0 : c+1)}> <FaCircleArrowRight /></button>
    </div>
    </>
  )
}

export default App
