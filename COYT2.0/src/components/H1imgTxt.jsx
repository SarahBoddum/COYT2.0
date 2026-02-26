export default function H1imgTxt({H1IT, H1ITp, H1ITimg1, H1ITimg2}) {
  return (
    <div id="H1imgTxt">
        <h1>{H1IT}</h1>
        <div className="TxtH1imtxt">
            <div>
                <img src={H1ITimg1} className="H1ITimg"></img>
                <img src={H1ITimg2} className="H1ITimg"></img>
                </div>
            <p>{H1ITp}</p>
        </div>
        
    </div>
  );
}