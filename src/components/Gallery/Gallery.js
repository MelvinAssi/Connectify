import React,{useState,useContext} from "react";
import "./Gallery.css";
import { UserContext } from "../../contexts/userContext";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
  function Gallery(){

    const{currentUser} = useContext(UserContext);
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const fileType =".png, .jpg" ; 
    const handleAddPhoto = (e) => {
      console.log("photos")
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const newPhoto = URL.createObjectURL(file); 
        setPhotos([...photos, newPhoto]); 
      }else{
        alert("Veuillez sél ectionner un fichier image valide !");
      }
      
    };
    
    const handleSelectPhoto = (photo) => {
      setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
      setSelectedPhoto(null); 
  };


    return (
    <>
      <div className="gallery_container">
        <ButtonAdd text={"Ajouter une photo"} onClick={handleAddPhoto} filetype={fileType}></ButtonAdd>   
        <div className="picture_grid">
          {photos.map((photo, index) => (
              <div key={index} className="picture_item">
                <img src={photo} alt={`photo-${index+1}`} onClick={() => handleSelectPhoto(photo)}></img>
              </div>
            ))}
        </div>
      </div>  


      {selectedPhoto && (
          <div className="photo_modal" onClick={handleCloseModal}>
              <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                  <img src={selectedPhoto} alt="Selected" className="modal_image" />
                  <button className="close_button" onClick={handleCloseModal}>X</button>
              </div>
          </div>
      )}  
    </>
    );
  }

  export default Gallery;
