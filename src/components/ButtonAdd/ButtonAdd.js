import React,{ useRef } from "react";
import "./ButtonAdd.css"

const ButtonAdd=({text,onClick,filetype})=>{

    
    const fileInputRef = useRef();    
    const triggerFileInput = () => {
      fileInputRef.current.click();
    };

    return (
        <>  
            <button
                className="add_btn"
                onClick={triggerFileInput} 
            >
            {text || "add ..."}  
            </button>
            
            <input
                ref={fileInputRef}
                type="file"
                accept={filetype}
                style={{ display: "none" }}
                onChange={onClick}
            />        
        </>
    )


}
export default ButtonAdd;