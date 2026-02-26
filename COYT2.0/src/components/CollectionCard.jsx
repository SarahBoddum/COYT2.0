import { Link } from "react-router-dom";

export default function CollectionCard({ title, subtitle, heroimage, id }) {
  return (
    <Link to={`/archive/${id}`} className="collectioncard">
      <img src={heroimage} className="CCimg" />
      <div className="streg"></div>
      <p>{title}</p>
      <p>{subtitle}</p>
    </Link>
  );
}
