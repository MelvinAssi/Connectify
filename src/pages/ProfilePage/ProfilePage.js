import Button from "../../components/Button/Button.js";
import ButtonFilter from "../../components/ButtonFilter/ButtonFilter.js";
import { UserContext } from "../../contexts/userContext.js";
import React, { useContext, useState } from "react";
import "./ProfilePage.css";
import bannerProfil from "../../assets/images/banner_profil2.png";
import Gallery from "../../components/Gallery/Gallery.js";
import Music from "../../components/Music/Music.js";
import Video from "../../components/Video/Video.js";
import Wall from "../../components/Wall/Wall.js";

import { ReactComponent as AppsIcon } from "../../assets/icons/apps.svg";
import { ReactComponent as WallIcon } from "../../assets/icons/person.svg";
import { ReactComponent as PhotoIcon } from "../../assets/icons/image.svg";
import { ReactComponent as PlayCircleIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as MusicNoteIcon } from "../../assets/icons/music_note2.svg";

function ProfilePage() {
    const { currentUser, loadingData } = useContext(UserContext);

    const [activeFilter, setActiveFilter] = useState("all");
    const handleFilterChange = (category) => {
        setActiveFilter(category);
    };
    const getFilterClass = (name) => {
        return `filterDiv ${activeFilter === "all" || activeFilter === name ? "" : "hidden"}`;
    };

    const icons = {
        all: <AppsIcon className="svg" />,
        walls: <WallIcon className="svg" />,
        gallery: <PhotoIcon className="svg" />,
        video: <PlayCircleIcon className="svg" />,
        music: <MusicNoteIcon className="svg" />,
    };

    // Afficher un état de chargement pendant que les données sont récupérées
    if (loadingData) {
        return (
            <main style={{ minHeight: "100vh" }}>
                <div style={{ height: "125px", backgroundColor: "#20835d" }}></div>
                <p>Chargement...</p>
            </main>
        );
    }

    // Si l'utilisateur n'est pas connecté après le chargement
    if (!currentUser) {
        return (
            <main style={{ minHeight: "100vh" }}>
                <div style={{ height: "125px", backgroundColor: "#20835d" }}></div>
                <p>Vous devez être connecté pour accéder à cette page.</p>
            </main>
        );
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main style={{ minHeight: "100vh" }}>
            <div style={{ height: "125px", backgroundColor: "#20835d" }}></div>
            <div className="banner_image" style={{ backgroundImage: `url(${bannerProfil})` }}>
                <div className="banner">
                    <div className="avatar"></div>
                    <div className="banner_information">
                        <div>
                            {currentUser.firstname} {currentUser.name}
                        </div>
                        <div className="banner_description">
                            Chez Connectify, nous sommes une plateforme sociale dynamique connectant des individus du monde entier.
                        </div>
                        <div className="follow-info">
                            <div className="follower">Followers: 0</div>
                            <div className="Following">Following: 0</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ minHeight: "100vh" }}>
                <div id="myBtnContainer">
                    <ButtonFilter
                        text="all"
                        activeFilter={activeFilter}
                        onFilterChange={handleFilterChange}
                        svg={icons.all}
                    />
                    <ButtonFilter
                        text="walls"
                        activeFilter={activeFilter}
                        onFilterChange={handleFilterChange}
                        svg={icons.walls}
                    />
                    <ButtonFilter
                        text="gallery"
                        activeFilter={activeFilter}
                        onFilterChange={handleFilterChange}
                        svg={icons.gallery}
                    />
                    <ButtonFilter
                        text="video"
                        activeFilter={activeFilter}
                        onFilterChange={handleFilterChange}
                        svg={icons.video}
                    />
                    <ButtonFilter
                        text="music"
                        activeFilter={activeFilter}
                        onFilterChange={handleFilterChange}
                        svg={icons.music}
                    />
                </div>
                <div className="container">
                    <div className={getFilterClass("walls")}>
                        <Wall />
                    </div>
                    <div className={getFilterClass("gallery")}>
                        <Gallery />
                    </div>
                    <div className={getFilterClass("video")}>
                        <Video />
                    </div>
                    <div className={getFilterClass("music")}>
                        <Music />
                    </div>
                </div>
            </div>
            <button onClick={scrollToTop} className="scrollToTopBtn">↑</button>
        </main>
    );
}

export default ProfilePage;