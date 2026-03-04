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
                        <h1 className="H1hvid">what is</h1>
                        <img src={logo} alt="COYT logo" id="aboutlogo"></img>
                        <p className="Phvid">COYT is a tailored menswear brand and a phygital retail concept built for the new retail reality.<br /><br />
                            We combine classic craftsmanship with advanced technology to create a seamless customer journey — where physical retail and online features work as one connected experience.
                        Founded by Mikkel Nicolaisen and Justian Kunz, COYT stands for Creation Of Your Thoughts — apparel designed around the individual, not the average.</p>
                                <div className="btndivretail">
                                    <a className="btn retailbtn" href="images/pitchDK.pdf" target="_blank">Dansk</a>
                                    <a className="btn retailbtn" href="images/pitchDE.pdf" target="_blank">Deutch</a>
                                    <a className="btn retailbtn" href="images/pitchENG.pdf" target="_blank">English</a>
                                </div>
                    </div>

            

                    <FuldBilledeTxt
                    id="aboutbaggrund"
                    children={<div> <h1 className="H1hvid">the menswear brand </h1>
                    <p className="Phvid">COYT is more than a concept. It is a menswear brand<br />We offer:
                    <br />Classic tailoring, AW & SS
                    <br />Trend-driven seasonal collections
                    <br />Classic tailoring, AW & SSCasual tailoring: t-shirts, polos, knitwear, denim, jackets and more.
                    <br /> <br />Our ambition is to expand tailored thinking beyond formal wear — making personalization part of everyday dressing.<br /> We design for men who value fit, quality and individuality.</p></div>
                    }></FuldBilledeTxt>

                    <TxtImg
                    TIh1="PRODUCT CAPABILITIES"
                    TIp={<p>COYT holds an exclusive partnership agreement, with one of the world’s most advanced and automated production setups for Tailored and M2O garments.<br />What this means:
                        <br />MOQ: 1 piece
                        <br />Bulk productions
                        <br />Tailored and standard sizing
                        <br />Production time: 7 days
                        
                        <br />We produce on demand — eliminating overproduction and inventory risk.<br /><br />We also offer:
                        <br />Design development
                        <br />Private label
                        <br />Custom projects
                        <br />Full-scale production partnerships
                        <br />API integration 
                        <br /><br />
                        If we can design it — we can produce it.
                    </p>}
                    TIimg={TIimg}></TxtImg>
                    <H1imgTxt
                    H1IT={<h1>the founding team</h1>}
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