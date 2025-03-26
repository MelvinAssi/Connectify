import React from "react";
import ReactPlayer from 'react-player';
import PlayerDefaultCover from "../../assets/images/player_default_cover.png"
import "./MusicPlayer.css"

const MusicPlayer =({music,index})=>{


    return(
        <> 
        <div className="music_player">
            <div className="music_img" style={{backgroundImage: music.cover ||`url(${ PlayerDefaultCover})`,}}></div>
            <div className="music_info">
                <div className="music_name">{music.name  || "unknown"}</div>
                <ReactPlayer className="react-player" url={music.src} controls={true} width="600px" height="60px" />
            </div>            
        </div>

            
        </>
    )
}
export default MusicPlayer;