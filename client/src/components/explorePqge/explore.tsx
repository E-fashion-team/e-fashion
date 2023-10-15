import { FunctionComponent, useState } from "react";
import styles from "../../styles/ExplorePage.module.css";
import img1 from "../../images/albert-dera-ILip77SbmOE-unsplash 1 (1).png"
import NavBar from "../NavBar";
import Footer from "../Footer";
import BrandCard from "../BrandCard";
import FashionistaCard from "../UpcomigCreators";
import FullProductCard from "../ProductCard";

const ExplorePage: FunctionComponent = () => {
  const [selectedCard, setSelectedCard] = useState("creator");

  const handleBrandClick = () => {
    setSelectedCard("brand");
  };
  const handleFashionClick = () => {
    setSelectedCard("fashion");
  };

  const handleCreatorClick = () => {
    setSelectedCard("creator");
  };

  return (
    <div>
      <NavBar />
      <div className={styles.explorePage}>
        <div className={styles.explorePageChild} />
        <div className={styles.exploreCollections}>Explore Collections</div>
        <div className={styles.frameParent}>
          <div className={styles.trendingWrapper}>
            <div className={styles.trending}>Trending</div>
          </div>
          <div className={styles.allFashionNftsWrapper}>
            <div className={styles.trending}> NFTs</div>
          </div>
          <div className={styles.artWrapper}>
            <div className={styles.trending}>Art</div>
          </div>
          <div className={styles.artWrapper}>
            <div className={styles.trending} onClick={handleFashionClick}>Fashion</div>
          </div>
          <div className={styles.creatorsWrapper}>
            <div className={styles.trending} onClick={handleCreatorClick}>
              Creators
            </div>
          </div>
          <div
            className={styles.allFashionNftsWrapper}
            onClick={handleBrandClick}
          >
            <div className={styles.trending}>Brands</div>
          </div>
        </div>
        <div className={styles.exploreComponents}>
        {selectedCard === "brand" && <BrandCard />}
        {selectedCard === "creator" && <FashionistaCard />}
        {selectedCard === "fashion" && <FullProductCard />}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorePage;