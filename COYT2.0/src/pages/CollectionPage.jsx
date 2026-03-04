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
    const sticky = stickyRef.current;
    const parent = parentRef.current;

    if (!sticky || !parent) return;

    const setHeight = () => {
      const scrollWidth = sticky.scrollWidth;
      const viewportWidth = window.innerWidth;

      const horizontalScrollDistance = scrollWidth - viewportWidth;

      parent.style.height =
        horizontalScrollDistance + window.innerHeight + "px";
    };

    const handleScroll = () => {
      const parentRect = parent.getBoundingClientRect();
      const totalScrollDistance =
        parent.offsetHeight - window.innerHeight;

      const scrolled = Math.min(
        Math.max(-parentRect.top, 0),
        totalScrollDistance
      );

      const maxHorizontalScroll =
        sticky.scrollWidth - window.innerWidth;

      const progress = scrolled / totalScrollDistance;

      sticky.scrollLeft = maxHorizontalScroll * progress;
    };

    // Vent til alle billeder er loaded før vi måler
    const images = sticky.querySelectorAll("img");
    let loaded = 0;

    const checkLoaded = () => {
      loaded++;
      if (loaded === images.length) {
        setHeight();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkLoaded();
      } else {
        img.addEventListener("load", checkLoaded);
      }
    });

    if (images.length === 0) {
      setHeight();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  if (!collection) return <p>Collection not found</p>;

  return (
    <div className="collectionPage">
      <h1>{collection.title}</h1>
      <p>{collection.subtitle}</p>

      <div className="sticky-parent" ref={parentRef}>
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
