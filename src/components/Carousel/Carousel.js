import React,{useState,useEffect} from "react";


import "./Carousel.css"
import fdActualite3 from "../../assets/images/fd_actualite3.png";
import fdActualite4 from "../../assets/images/fd_actualite4.png";
import fdActualite5 from "../../assets/images/fd_actualite5.png";

const Carousel =()=>{

    const items = [
        { id: 1, img: fdActualite3,title:"Restez Connecter", text: `Participez au Concours Photo !Chaque semaine , un concours photo aura lieu . Il y aura un thème et 3 gagnants seront choisis et publiée sur le compte officiel de Connectify !` },
        { id: 2, img: fdActualite4,title:"Voyager Rétro", text: `Participez au Concours Photo !Chaque semaine , un concours photo aura lieu . Il y aura un thème et 3 gagnants seront choisis et publiée sur le compte officiel de Connectify !` },
        { id: 3, img: fdActualite5,title:"Concours Photo", text: `Participez au Concours Photo !Chaque semaine , un concours photo aura lieu . Il y aura un thème et 3 gagnants seront choisis et publiés sur le compte officiel de Connectify !` },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
        return () => clearInterval(interval);
      }, [items.length]);


    return(
        <>
            <div className="carousel-container">
                <div className="carousel">
                    <div className="carousel-item" >
                        <div className="carousel_img" style={{backgroundImage:`url(${items[currentIndex].img})`}}></div>
                        <div className="carousel_txt">
                            <h2>{items[currentIndex].title}</h2>
                            <div className="ligne"></div>
                            <p>{items[currentIndex].text}</p>
                        </div>      
                    </div> 
                    <div className="carousel-dots">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>                
                </div>
            </div> 
        </>
    )
}
export default Carousel;