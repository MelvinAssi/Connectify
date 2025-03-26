import React,{useState,useEffect} from "react";
import "./TitleAnimation.css"


const TitleAnimation=({text})=>{
    const [letters, setLetters] = useState([]);

    useEffect(() => {
      const textArray = text.split('');
      setLetters(textArray);
    }, [text]);
  
    const getAnimationDelay = (index) => {
        const n = letters.length;
        if(index< n/2){
            return `${index * 0.5}s`
        }else{
            return `${(n-index-1) * 0.5}s`

        }     
    };

    return(
        <>
            <div className="text-container">
                {letters.map((letter, index) => (
                    <span
                        key={index}
                        className="letter"
                        style={{
                            animationDelay: getAnimationDelay(index),
                        }}
                        >
                        {letter}
                    </span>
                ))}
            </div>
        
        </>
    )

}
export default TitleAnimation;