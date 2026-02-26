import React from "react";
import FuldBilledeTxt from "../components/FuldBilledeTxt";
import logo from "../assets/images/LogoHvid.png";
import TxtImg from "../components/TxtImg";
import TIimg from "../assets/images/COYT-5.jpg";
import Footer from "../components/Footer";
import H1imgTxt from "../components/H1imgTxt";
import H1ITimg1 from "../assets/images/COYT-159.jpg";
import H1ITimg2 from "../assets/images/COYT-32.jpg";

export const About = () => {
    return(
        <div>
            <div id="abouttop">
                <h1 className="H1hvid">ABOUT</h1>
                <img src={logo} alt="COYT logo" id="aboutlogo"></img>
                <p className="Phvid">Tailormade menswear created of your thoughts</p>
            </div>

            <TxtImg
            TIh1={<h1 className="StorH1">tech & tailoring</h1>}
            TIp={<p>COYT combines classic menswear craftsmanship with advanced retail technology to create a new, seamless tailoring experience. Through in-store 3D body scanning, digital fittings and a personal online wardrobe, each garment is made precisely to the individual — without stock, waste or compromise.
                <br /><br />Physical service, perfect fit and smart technology come together in one connected journey, where tailoring becomes both personal and future-ready.
            </p>}
            TIimg={TIimg}></TxtImg>

            <FuldBilledeTxt
            id="aboutbaggrund"
            children={<div><h1 className="H1hvid">our core</h1>
            <p className="Phvid">At the heart of COYT lies a deep respect for classic tailoring and menswear traditions. Our design process is rooted in timeless silhouettes, precise construction and an understanding of how garments should move, age and endure.

Each piece is developed through careful consideration of proportion, fabric and function, balancing heritage craftsmanship with a contemporary approach to design. We believe in creating refined essentials that transcend seasons and trends — garments defined by quality, longevity and quiet confidence.</p></div>
            }></FuldBilledeTxt>

            <H1imgTxt
            H1IT={<h1 className="StorH1">who we are</h1>}
            H1ITimg1={H1ITimg1}
            H1ITimg2={H1ITimg2}
            H1ITp={<p>Mikkel Nicolaisen (Founder & CEO) and Justian Kunz (Creative Director) represent the two complementary sides of COYT.
<br /><br />
Mikkel is responsible for the overall business and strategic direction of the brand, including partnerships with production countries, manufacturers, retail partners and collaborators. His focus lies in building strong, long-term relationships that support sustainable growth.
<br /><br />
Justian brings over 30 years of experience as a tailor and menswear specialist. As Creative Director, he leads the development of collections, the brand’s creative expression and all aspects of fit and quality, ensuring each garment meets COYT’s standards for craftsmanship and precision.</p>}></H1imgTxt>

            <Footer></Footer>
        </div>
    )
}

export default About;