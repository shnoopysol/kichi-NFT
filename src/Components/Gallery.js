import React, { useState, useEffect } from "react";
import "./Gallery.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import NFTsCarousel from "./NFTsCarousel";

function Gallery({ setShouldShowOpenPopUp }) {
  const NFTsList = [
    {
      title: "Featured NFTs",
      description: "Selected & curated by enter.art",
      cards: [
        {
          name: "The gauntlet",
          artist: "@popmental",
          image: "https://mars-images.imgix.net/nft/1625399352486.png?auto=compress&w=400&h=400",
        },
        {
          name: "Flower Power Part 2",
          artist: "@brede71",
          image: "https://mars-images.imgix.net/nft/1625383270036.jpg?auto=compress&w=400&h=400",
        },
        {
          name: "Peachy Bun - CryptoBun#26",
          artist: "@littleengineart",
          image: "https://mars-images.imgix.net/nft/1625336270087.png?auto=compress&w=400&h=400",
        },
      ],
    },
    {
      title: "Auctions ending soon",
      description: "Bid on art before it disappears",
      cards: [
        {
          name: "Cobra #2",
          artist: "hq_design",
          image: "https://mars-images.imgix.net/nft/1623948702412.png?auto=compress&w=400&h=400",
        },
        {
          name: "Snake Girl",
          artist: "@brede71",
          image: "https://mars-images.imgix.net/nft/1622740894690.jpg?auto=compress&w=400&h=400",
        },
        {
          name: "Cap #01",
          artist: "@fnh_arts",
          video:
            "https://cloudinary-videos.b-cdn.net/du_3,ac_none,w_316,h_316,c_fill/f_mp4/v1624972060/nft/f0a5b72c786df313fd34aff37277de7f79b245edef6ecf2e628a769e0d6d9659.mov",
        },
      ],
    },
    {
      title: "New NFTs",
      description: "Stay in the loop",
      cards: [
        {
          name: "Dark Alien Devil",
          artist: "@brojanowski",
          image: "https://mars-images.imgix.net/nft/1625499082059.jpg?auto=compress&w=400&h=400",
        },
        {
          name: "Lick Me Please!",
          artist: "@brojanowski",
          image: "https://mars-images.imgix.net/nft/1625498859253.JPG?auto=compress&w=400&h=400",
        },
        {
          name: "Granny Lurk.",
          artist: "@divasyal",
          image: "https://mars-images.imgix.net/nft/1625498776897.png?auto=compress&w=400&h=400",
        },
      ],
    },
    {
      title: "Visual art",
      description: "Some gems from the gallery",
      cards: [
        {
          name: "Dark Alien Devil",
          artist: "@brojanowskital",
          image: "https://mars-images.imgix.net/nft/1625499082059.jpg?auto=compress&w=400&h=400",
        },
        {
          name: "Lick Me Please!",
          artist: "@brojanowski",
          image: "https://mars-images.imgix.net/nft/1625498859253.JPG?auto=compress&w=400&h=400",
        },
        {
          name: "Granny Lurk.",
          artist: "@divasyal",
          image: "https://mars-images.imgix.net/nft/1625498776897.png?auto=compress&w=400&h=400",
        },
      ],
    },
    {
      title: "Audio NFTs",
      description: "Audible delights",
      cards: [
        {
          name: "8-bit Exploration Theme",
          artist: "@bluejay_studio",
          image: "https://mars-images.imgix.net/nft/1625401917674.jpg?auto=compress&w=400&h=400",
        },
        {
          name: "Prepare to Be Boarded, Comrade!",
          artist: "@bluejay_studio",
          image: "https://mars-images.imgix.net/nft/1625331141308.jpg?auto=compress&w=400&h=400",
        },
        {
          name: "Reflection",
          artist: "@bluejay_studio",
          image: "https://mars-images.imgix.net/nft/1625311480240.jpg?auto=compress&w=400&h=400",
        },
      ],
    },
    {
      title: "Video NFTs",
      description: "Motion picture goodies",
      cards: [
        {
          name: "Magic Potion | 03 | #5 edition",
          artist: "@infinity3d",
          video:
            "https://cloudinary-videos.b-cdn.net/du_3,ac_none,w_316,h_316,c_fill/v1625491003/nft/acfa12d5607b6e1802a6a9e7c6e2df39c72b932656cc6cb6f8626a6626fba2fe.mp4",
        },
        {
          name: "Digital Limited Edition- Cat Girl",
          artist: "@epicthundercat",
          video:
            "https://cloudinary-videos.b-cdn.net/du_3,ac_none,w_316,h_316,c_fill/f_mp4/v1625433587/nft/1452944132e59b8a5b46e7a10d046b9541541a9ea9356324b7f56f6efe8322cc.mov",
        },
        {
          name: "Digital Limited Edition- Cat Girl",
          artist: "@epicthundercat",
          video:
            "https://cloudinary-videos.b-cdn.net/du_3,ac_none,w_316,h_316,c_fill/f_mp4/v1625433587/nft/1452944132e59b8a5b46e7a10d046b9541541a9ea9356324b7f56f6efe8322cc.mov",
        },
      ],
    },
    {
      title: "Sold NFTs",
      description: "Sold NFTs",
      cards: [
        {
          name: "Raccoon #1",
          artist: "@hq_design",
          image: "https://mars-images.imgix.net/nft/1625492342846.png?auto=compress&w=400&h=400",
        },
        {
          name: "Kokeshi doll #48",
          artist: "@3d_chambers",
          video:
            "https://cloudinary-videos.b-cdn.net/du_3,ac_none,w_316,h_316,c_fill/v1625489254/nft/72a25a1e75021740d8887819389cf75fd9b3608ac49a8215e525e025cfb67825.mp4",
        },
        {
          name: "The Council #003",
          artist: "@ifeelslick",
          image: "https://mars-images.imgix.net/nft/1625484033890.png?auto=compress&w=400&h=400",
        },
      ],
    },
  ];

  const [windowWidth, setWindowWidth] = useState();
  const [usingDevice, setUsingDevice] = useState({
    desktop: false,
    tablet: false,
    bigPhone: true,
    smallPhone: false,
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // First time browser loads, set carousel's numOfSlides
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1000) {
      setUsingDevice({ desktop: true, tablet: false, bigPhone: false, smallPhone: false });
    } else if (windowWidth >= 768 && windowWidth < 1000) {
      setUsingDevice({ desktop: false, tablet: true, bigPhone: false, smallPhone: false });
    } else if (windowWidth >= 480 && windowWidth < 768) {
      setUsingDevice({ desktop: false, tablet: false, bigPhone: true, smallPhone: false });
    } else {
      setUsingDevice({ desktop: false, tablet: false, bigPhone: false, smallPhone: true });
    }
  }, [windowWidth]);

  return (
    <div className="gallery">
      <div className="gallery__spotlight">
        <div className="gallery__spotlightDetails">
          <div className="gallery__spotlightDetailsTop">
            <div className="gallery__spotlightDetailsProfile">
              <img
                src="https://mars-images.imgix.net/1622500304604?auto=compress&amp;fit=crop&amp;w=100&amp;h=100"
                width="40"
                height="40"
                className="gallery__spotlightDetailsPhoto"
              />
              <p className="gallery__spotlightDetailsTag">
                @hugoshi
                <VerifiedUserIcon className="fontSizeSmall colorMeOrange" />
              </p>
            </div>
            <div className="gallery__spotlightDetailsDescription">
              <h1>Kanpeki</h1>
              <p>
                Bubblegum Doll is a collection of dolls of different types that can represent urban
                tribes, cosplay, futuristic themes, or simply free expression of style.
                <br />
                <br />- Hugoshi -
              </p>
            </div>
          </div>
          <div className="gallery__spotlightDetailsBottom">
            <div className="gallery__spotlightDetailsBidInfo">
              <div className="gallery__spotlightDetailsBidInfoLeft">
                <div className="gallery__spotlightDetailsBidInfoLeftPhoto">Bid</div>
              </div>
              <div className="gallery__spotlightDetailsBidInfoRight">
                <h3>LAST BID:</h3>
                <p>Last updated 12:18:48</p>
                <p>37 Bn</p>
                <p>$66.27</p>
              </div>
            </div>
            <div className="gallery__spotlightDetailsBidCountdown">
              <div className="gallery__spotlightDetailsBidCountdownLeft">
                <h3>Auction</h3>
                <p>Ends in:</p>
              </div>
              <div className="gallery__spotlightDetailsBidCountdownRight">
                <div className="gallery__spotlightDetailsBidCountdownRightHours">
                  <p>05</p>
                  <p>Hours</p>
                </div>
                <div className="gallery__spotlightDetailsBidCountdownRightMinutes">
                  <p>58</p>
                  <p>Minutes</p>
                </div>
                <div className="gallery__spotlightDetailsBidCountdownRightSeconds">
                  <p>16</p>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery__spotlightNFT">
          <video
            id="video"
            poster="https://marscode.s3.eu-north-1.amazonaws.com/assets/img/nft/1625412240745.gif"
            src="https://cloudinary-videos.b-cdn.net/w_800/v1625408610/nft/28df62cdac238d6cff47671c3908c55bc3b4eabd46dee0f16abc228472dee55a.mp4"
            controls
            loop
            playsInline
            style={{ maxWidth: "100%" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Body */}
      {NFTsList.map((carousel) => {
        return (
          <NFTsCarousel
            title={carousel.title}
            description={carousel.description}
            cards={carousel.cards}
            usingDevice={usingDevice}
            setShouldShowOpenPopUp={setShouldShowOpenPopUp}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
