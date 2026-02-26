import Footer from "../components/Footer";
import FuldBilledeTxt from "../components/FuldBilledeTxt";


export default function Contact() {
  return (
    <div>
                  <FuldBilledeTxt
           id="contactbaggrund" 
           children={<div className="FBtxt">
                        <h1 className="H1hvid">contact</h1>
                        <p className="Phvid">Wheter you represent a company interested in getting to know us better or a customer looking for the perfect suit, you are always welcome to reach out. </p>
                        <div className="btndivretail" id="contactbtn">
                            <a class="btn retailbtn" href="mailto:mn@coyt.dk?subject=Retailer">Retailers</a>
                            <a class="btn retailbtn" href="mailto:mn@coyt.dk?subject=Customers">Customers</a>
               
                        </div>
                    </div>}>
            </FuldBilledeTxt>   
        

        <Footer></Footer>
  </div>
  );
}
