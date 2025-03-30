import React, { useState, useEffect, useContext } from "react";
import "./Gallery.css";
import { UserContext } from "../../contexts/userContext";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

function Gallery() {
  const { currentUser, setUserData, getUserData } = useContext(UserContext);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const fileType = ".png, .jpg";

  useEffect(() => {
    const fetchUserImages = async () => {
      if (currentUser) {
        const photosData = await getUserData(currentUser.uid, "photos");
        if (photosData && Array.isArray(photosData)) {
          photosData.map(photo => {
            addManualFile(photo.name);
          });
        }
      }
    };

    fetchUserImages();
  }, [currentUser, getUserData]);

  const addManualFile = async (name) => {
    const response = await fetch('../../assets/images/' + name);
    const photosData = await response.blob();
    const file = new File([photosData], name, { type: "image/" });
    const fileName = file.name.substr(0, file.name.length - 4);

    const newPhoto = {
      src: URL.createObjectURL(file),
      name: fileName,
      path: file.name,
    };

    setPhotos(prevPhotos => {
      const updatedPhotos = [...prevPhotos, newPhoto];
      setUserData(currentUser.uid, "photos", updatedPhotos.map(photo => ({ name: photo.name, path: photo.path })));
      return updatedPhotos;
    });
  };

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const newPhoto = {
        src: URL.createObjectURL(file),
        name: file.name.substr(0, file.name.length - 4),
      };

      const userPhoto = {
        name: file.name
      };
      setUserData(currentUser.uid, "photos", userPhoto);

      setPhotos(prevPhotos => {
        const updatedPhotos = [...prevPhotos, newPhoto];
        setUserData(currentUser.uid, "image", updatedPhotos.map(photo => ({ name: photo.name, path: photo.path })));
        return updatedPhotos;
      });
    } else {
      alert("Veuillez sélectionner un fichier image valide !");
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
              <img
                src={photo.src}
                alt={`photo-${index + 1}`}
                onClick={() => handleSelectPhoto(photo.src)} // Passez `photo.src` au lieu de `photo`
              />
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
