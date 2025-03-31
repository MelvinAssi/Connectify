import React, { useState, useEffect, useContext } from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ReactPlayer from "react-player";
import { UserContext } from "../../contexts/userContext.js";
import "./Video.css";

function Video() {
  const { currentUser, setUserData, getUserData } = useContext(UserContext);
  const [videos, setVideos] = useState([]);
  const fileType = ".mp4, .wmv, .WebM";

  useEffect(() => {
    const fetchUserVideos = async () => {
      if (currentUser) {
        const videosData = await getUserData(currentUser.uid, "videos");
        if (videosData && Array.isArray(videosData)) {
          videosData.forEach((video) => {
            addManualFile(video.name);
          });
        }
      }
    };
    fetchUserVideos();
  }, [currentUser, getUserData]);

  const addManualFile = async (name) => {
    const response = await fetch('../../assets/video/' + name);
    const videoData = await response.blob();

    const file = new File([videoData], name, { type: "video/" });
    const fileName = file.name.substr(0, file.name.length - 4);

    const newVideo = {
      src: URL.createObjectURL(file),
      name: fileName,
      path: file.name,
    };

    setVideos((prevVideos) => [...prevVideos, newVideo]);
    setUserData(currentUser.uid, "videos",[...videos,{ name: fileName, path: file.name }])
    
  };

  const handleAddVideo = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const newVideo = {
        src: URL.createObjectURL(file),
        name: file.name.substr(0, file.name.length - 4),
      };

      const userVideo = {
        name: file.name,
      };

      
      setUserData(currentUser.uid, "videos", userVideo); 
      setVideos((prevVideos) => [...prevVideos, newVideo]);
    } else {
      alert("Veuillez sélectionner un fichier vidéo valide !");
    }
  };

  return (
    <>
      <div className="video_container" style={{ padding: "20px" }}>
        <ButtonAdd text={"Ajouter une vidéo"} onClick={handleAddVideo} filetype={fileType}></ButtonAdd>
      </div>

      <div className="video_grid">
        {videos.map((video, index) => (
          <div key={index} className="video_item">
            <ReactPlayer url={video.src} controls={true} width="100%" height="auto" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Video;
