import { collections } from "../data/collections";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer";


export default function Archive() {
  return (
    <div id="Archivelanding">
      <h1 className="StorH1">Archive</h1>
        <div id="collectionContainerArchive">
     {collections.map((collection) => (
        <CollectionCard
            key={collection.id}
            id={collection.id}           // 👈 vigtigt
            title={collection.title}
            subtitle={collection.subtitle}
            heroimage={collection.heroimage}
        />
        ))}

        </div>
        <Footer></Footer>
    </div>
  );
}
