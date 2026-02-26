export default function TxtImg({TIh1, TIp, TIimg}) {
  return (
    <div id="TxtImg">
       <div className="Txtabout">
        <h1>{TIh1}</h1>
        <p>{TIp}</p>
       </div>
       <img src={TIimg} className="TIimg"></img>
    </div>
  );
}