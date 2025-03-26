import React,{useState} from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import MusicPlayer from "../MusicPlayer/MusicPlayer.js";
import "./Music.css"



function Music(){
    const [musics, setMusics] = useState([]); 
    const fileType =".mp3, .wav" ;
    const handleAddMusic = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("audio/")) {
            const newMusic = {
                src :URL.createObjectURL(file),
                name : file.name.substr(0, file.name.length - 4),
                
            };
            setMusics([...musics, newMusic]);
          } else {
            alert("Veuillez sélectionner un fichier audio valide !");
          }
      };

    return (
    <>  
        <div className="music_container" style={{padding:"20px"}}>
            <ButtonAdd text={"Ajouter un audio"} onClick={handleAddMusic} filetype={fileType}></ButtonAdd>
            <div className="music_grid">
                {musics.map((music, index) => (
                    <div key={index} className="music_item">
                        <MusicPlayer music={music} index={index}></MusicPlayer>
                    </div>
                    ))}
            </div>

        </div>
        
    </>


    );

}
export default Music;