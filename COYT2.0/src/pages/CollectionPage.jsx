import { useParams } from "react-router-dom";
import { collections } from "../data/collections";
import { useRef, useEffect } from "react";
import Footer from "../components/Footer";

export default function CollectionPage() {
  const { id } = useParams();
  const collection = collections.find(c => c.id === id);

  const stickyRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !parentRef.current) return;

      const sticky = stickyRef.current;
      const parent = parentRef.current;

      const scrollWidth = sticky.scrollWidth;
      const parentHeight = parent.getBoundingClientRect().height;
      const stickyHeight = sticky.getBoundingClientRect().height;

      const verticalScrollHeight = parentHeight - stickyHeight;
      const stickyTop = sticky.getBoundingClientRect().top;

      // samme logik som dit eksempel
      if (stickyTop > 0) return;

      const scrolled = parent.getBoundingClientRect().top * -1;

      sticky.scrollLeft =
        (scrollWidth / verticalScrollHeight) * scrolled * 0.85;
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  if (!collection) return <p>Collection not found</p>;

  return (
    <div className="collectionPage">
      <h1>{collection.title}</h1>
      <p>{collection.subtitle}</p>

      {/* STICKY PARENT */}
      <div className="sticky-parent" ref={parentRef}>
        {/* STICKY ELEMENT */}
        <div className="sticky" ref={stickyRef}>
          <div className="carouselTrack">
            {collection.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="carouselImage"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
