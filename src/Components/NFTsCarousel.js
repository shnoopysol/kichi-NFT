import React, { useState, useEffect } from "react";
import "./NFTsCarousel.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function NFTsCarousel({ title, description, cards, usingDevice, setShouldShowOpenPopUp }) {
  const handleCardClick = () => {
    console.log("Clicked!");
    setShouldShowOpenPopUp(true);
  };

  return (
    <div className="NFTsCarousel">
      <div className="NFTsCarousel__top">
        <div className="NFTsCarousel__left">
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <div className="NFTsCarousel__right">
          <button className="bootstrap-buttonStyle" onClick={() => setShouldShowOpenPopUp(true)}>View all</button>
        </div>
      </div>
      <div className="NFTsCarousel__bottom">
        {usingDevice.desktop === true ? (
          <Carousel
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3.5,
                },
              },
            ]}
          >
            {cards.map((card) => {
              return (
                <div className="NFTsCarousel__bottomCard" onClick={() => handleCardClick()}>
                  <div className="NFTsCarousel__bottomCardImageContainer">
                    {card.image ? (
                      <img src={card.image} />
                    ) : (
                      <video muted loop autoPlay playsInline src={card.video}></video>
                    )}
                  </div>
                  <div className="NFTsCarousel__bottomCardDescription">
                    <p>{card.name}</p>
                    <p>
                      {card.artist}
                      <VerifiedUserIcon className="fontSizeSmall colorMeOrange" />
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : usingDevice.tablet === true ? (
          <Carousel
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2.5,
                },
              },
            ]}
          >
            {cards.map((card) => {
              return (
                <div className="NFTsCarousel__bottomCard" onClick={() => handleCardClick()}>
                  <div className="NFTsCarousel__bottomCardImageContainer">
                    {card.image ? (
                      <img src={card.image} />
                    ) : (
                      <video muted loop autoPlay playsInline src={card.video}></video>
                    )}
                  </div>
                  <div className="NFTsCarousel__bottomCardDescription">
                    <p>{card.name}</p>
                    <p>
                      {card.artist}
                      <VerifiedUserIcon className="fontSizeSmall colorMeOrange" />
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : usingDevice.bigPhone === true ? (
          <Carousel
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1.5,
                },
              },
            ]}
          >
            {cards.map((card) => {
              return (
                <div className="NFTsCarousel__bottomCard" onClick={() => handleCardClick()}>
                  <div className="NFTsCarousel__bottomCardImageContainer">
                    {card.image ? (
                      <img src={card.image} />
                    ) : (
                      <video muted loop autoPlay playsInline src={card.video}></video>
                    )}
                  </div>
                  <div className="NFTsCarousel__bottomCardDescription">
                    <p>{card.name}</p>
                    <p>
                      {card.artist}
                      <VerifiedUserIcon className="fontSizeSmall colorMeOrange" />
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : usingDevice.smallPhone === true ? (
          <Carousel
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ]}
          >
            {cards.map((card) => {
              return (
                <div className="NFTsCarousel__bottomCard" onClick={() => handleCardClick()}>
                  <div className="NFTsCarousel__bottomCardImageContainer">
                    {card.image ? (
                      <img src={card.image} />
                    ) : (
                      <video muted loop autoPlay playsInline src={card.video}></video>
                    )}
                  </div>
                  <div className="NFTsCarousel__bottomCardDescription">
                    <p>{card.name}</p>
                    <p>
                      {card.artist}
                      <VerifiedUserIcon className="fontSizeSmall colorMeOrange" />
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default NFTsCarousel;
