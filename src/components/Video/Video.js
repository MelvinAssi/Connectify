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

    setVideos((prevVideos) => {
      const updatedVideos = [...prevVideos, newVideo];
      // Mise à jour de l'état utilisateur avec la dernière vidéo
      setUserData(currentUser.uid, "videos", updatedVideos.map(video => ({ name: video.name, path: video.path })));
      return updatedVideos;
    });
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

      // Mise à jour des données utilisateur
      setUserData(currentUser.uid, "videos", [newVideo]);  // Vous pouvez gérer les vidéos comme tableau ou un seul objet selon vos besoins

      setVideos((prevVideos) => {
        const updatedVideos = [...prevVideos, newVideo];
        setUserData(currentUser.uid, "videos", updatedVideos.map((video) => ({ name: video.name, path: video.path })));
        return updatedVideos;
      });
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
