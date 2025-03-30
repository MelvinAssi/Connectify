import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fdActualite3 from "../../assets/images/fd_actualite3.png";
import fdActualite4 from "../../assets/images/fd_actualite4.png";
import fdActualite5 from "../../assets/images/fd_actualite5.png";


const CarouselContainer = styled.div`
    border-radius: 20px;
`;

const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 600px;
    overflow: hidden;
`;

const CarouselItem = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color5);
    color: var(--color3);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.5s ease;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CarouselImg = styled.div`
    background-size: cover;
    width: 30%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`;

const CarouselTxt = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;

    p {
        font-size: 4vh;
    }

    h2 {
        font-size: 5vh;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;

        p {
            font-size: 2vh;
        }

        h2 {
            font-size: 4vh;
        }
    }
`;

const Ligne = styled.div`
    width: 30%;
    border-top: 2px solid var(--color3);
`;

const CarouselDots = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 10px;
`;

const Dot = styled.div`
    width: 50px;
    height: 50px;
    background-color: var(--color7);
    border-radius: 50%;
    cursor: pointer;

    &.active {
        background-color: var(--color2);
    }
`;

const Carousel = () => {
    const items = [
        {
            id: 1,
            img: fdActualite3,
            title: "Restez Connecter",
            text: `Participez au Concours Photo ! Chaque semaine, un concours photo aura lieu. Il y aura un thème et 3 gagnants seront choisis et publiés sur le compte officiel de Connectify !`,
        },
        {
            id: 2,
            img: fdActualite4,
            title: "Voyager Rétro",
            text: `Participez au Concours Photo ! Chaque semaine, un concours photo aura lieu. Il y aura un thème et 3 gagnants seront choisis et publiés sur le compte officiel de Connectify !`,
        },
        {
            id: 3,
            img: fdActualite5,
            title: "Concours Photo",
            text: `Participez au Concours Photo ! Chaque semaine, un concours photo aura lieu. Il y aura un thème et 3 gagnants seront choisis et publiés sur le compte officiel de Connectify !`,
        },
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

    return (
        <CarouselContainer>
            <CarouselWrapper>
                <CarouselItem>
                    <CarouselImg style={{ backgroundImage: `url(${items[currentIndex].img})` }} />
                    <CarouselTxt>
                        <h2>{items[currentIndex].title}</h2>
                        <Ligne />
                        <p>{items[currentIndex].text}</p>
                    </CarouselTxt>
                </CarouselItem>
                <CarouselDots>
                    {items.map((item, index) => (
                        <Dot
                            key={item.id}
                            className={currentIndex === index ? "active" : ""}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </CarouselDots>
            </CarouselWrapper>
        </CarouselContainer>
    );
};

export default Carousel;