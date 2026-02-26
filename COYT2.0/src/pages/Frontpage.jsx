import { useState, useEffect } from "react";
import Forside1 from "../assets/images/Forside1.jpg";
import Forside2 from "../assets/images/Forside2.jpg";
import Forside3 from "../assets/images/Forside3.jpg";
import Forside4 from "../assets/images/Forside4.jpg";
import logo from "../assets/images/LogoHvid.png";
import FuldBilledeTxt from "../components/FuldBilledeTxt";
import { collections } from "../data/collections";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer";

const images = [
  {
    id: "forside-1",
    src: Forside1,
  },
  {
    id: "forside-2",
    src: Forside2,
  },
  {
    id: "forside-3",
    src: Forside3,
  },
  {
    id: "forside-4",
    src: Forside4,
  },
];

export default function Frontpage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div>
            
            <div id="karruselwrap">
                <div id="karruseltxt">
                    <img src={logo}></img>
                    <p className="Phvid">Creation Of Your Thoughts</p>
                </div>
                <div className="carousel">
                {images.map((image, index) => (
                    <img
                    key={image.id}
                    id={image.id}          // 👈 nu har hvert billede sit eget id
                    src={image.src}
                    alt=""
                    className={index === currentIndex ? "slide active" : "slide"}
                    />
                ))}
                </div>

                
            </div>
           <FuldBilledeTxt
           id="forsidebaggrund" 
           children={<div className="FBtxt">
                        <h1 className="H1hvid">COYT is looking for retail partners</h1>
                        <p className="Phvid">COYT is a shop-in-shop concept designed to increase turnover per M2 and elevate the customer journey in modern retail. 
                          <br /><br />COYT combines the strengths of physical retail and e-commerce into one seamless omnichannel experience — uniting tailoring, technology and high-service interaction in a format that drives loyalty and repeat business. 
                          <br /><br />We collaborate with ambitious retailers who want to differentiate through experience, innovation and long-term customer value.
<br /><br />
Explore the concept below.</p>
                        <div className="btndivretail">
                            <a class="btn retailbtn" href="images/pitchDK.pdf" target="_blank">Dansk</a>
                            <a class="btn retailbtn" href="images/pitchDE.pdf" target="_blank">Deutch</a>
                            <a class="btn retailbtn" href="images/pitchENG.pdf" target="_blank">English</a>
                        </div>
                    </div>}>
            </FuldBilledeTxt>

            <div>
                <h1 className="StorH1 alignC">Archive</h1>
                <div id="horisontalscroll"> 
                  <div id="collectionContainer">
                    {collections.map((collection) => (
                    <CollectionCard
                      title={collection.title}
                      id={collection.id} 
                      subtitle={collection.subtitle}
                      heroimage={collection.heroimage}
                      />

                    ))}
                  </div>
                </div>
            </div>
            
            <Footer></Footer>

        </div>
  );
}
