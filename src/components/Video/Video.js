import React,{useState} from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ReactPlayer from "react-player";
import "./Video.css"

function Video(){

    const [videos, setVideos] = useState([]); 
    const fileType =".mp4, .wmv, .WebM" ;
    const handleAddVideo = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
            const newVideo = URL.createObjectURL(file);
            setVideos([...videos, newVideo]);
          } else {
            alert("Veuillez sélectionner un fichier video valide !");
          }
      };

    return(
        <>
            <div className="video_container" style={{padding:"20px"}}></div>
                <ButtonAdd text={"Ajouter une video"} onClick={handleAddVideo} filetype={fileType}></ButtonAdd>
            <div/>
            <div className="video_grid">
                {videos.map((video, index) => (
                    <div key={index} className="video_item">
                        <ReactPlayer url={video} controls={true} width="100%" height="auto" />
                    </div>
                    ))}
            </div>
        </>
    )
}
export default Video