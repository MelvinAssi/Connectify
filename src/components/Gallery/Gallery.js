import React,{useState,useEffect,useContext} from "react";
import "./Gallery.css";
import { UserContext } from "../../contexts/userContext";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
  function Gallery(){

    const{currentUser} = useContext(UserContext);
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const fileType =".png, .jpg" ; 

    useEffect(() => {
      const storedPhotos = JSON.parse(localStorage.getItem('photos'));
      if (storedPhotos) {
        setPhotos(storedPhotos);
      }
    }, []);


    const handleAddPhoto = (e) => {
      console.log("photos")
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Image = reader.result;
          setPhotos(prevPhotos => {
            const updatedPhotos = [...prevPhotos, base64Image];
            localStorage.setItem(currentUser.uid+'photos', JSON.stringify(updatedPhotos)); 
            return updatedPhotos;
          });
        };
        reader.readAsDataURL(file);
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
