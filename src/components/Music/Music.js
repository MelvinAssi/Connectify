import React,{useState,useEffect,useContext} from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import MusicPlayer from "../MusicPlayer/MusicPlayer.js";
import "./Music.css"
import { UserContext } from "../../contexts/userContext.js";



function Music(){

    const{currentUser,setUserData,getUserData} = useContext(UserContext);
    const [musics, setMusics] = useState([]); 
    const fileType =".mp3, .wav" ;

    useEffect(() => {
        const fetchUserMusics = async () => {
            if (currentUser) {
                const musicsData = await getUserData(currentUser.uid, "music");
                if (musicsData && Array.isArray(musicsData)) {
                    musicsData.map(music => {
                        addManualFile(music.name)

                    });
                }
            }
        };

        fetchUserMusics();
    }, [currentUser, getUserData]);

    const addManualFile = async (name) => {
        const response = await fetch('../../assets/sounds/'+name);
        const audioData = await response.blob();
        
        const file = new File([audioData], name, { type: "audio/mp3" });
        const fileName = file.name.substr(0, file.name.length - 4);
    
        const newMusic = {
            src: URL.createObjectURL(file),
            name: fileName,
            path: file.name,
        };
    
        setMusics(prevMusics => [...prevMusics, newMusic]);
        setUserData(currentUser.uid, "music", [...musics, { name: fileName, path: file.name }]);
    };

    const handleAddMusic = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("audio/")) {
            console.log(file)
            const newMusic = {
                src: URL.createObjectURL(file),
                name: file.name.substr(0, file.name.length - 4),
            };
    
            const userMusic = {
                name: file.name
            };
            setUserData(currentUser.uid, "music", userMusic);
            setMusics((prevMusics) => [...prevMusics, newMusic]);
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