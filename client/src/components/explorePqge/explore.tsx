import { FunctionComponent } from "react";
import styles from "../../styles/ExplorePage.module.css";
import img1 from "../../images/albert-dera-ILip77SbmOE-unsplash 1 (1).png"
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const ExplorePage: FunctionComponent = () => {
  return (<div>
<NavBar/>
    <div className={styles.explorePage}>
      <div className={styles.explorePageChild} />
      <div className={styles.exploreCollections}>Explore Collections</div>
      
        
      <div className={styles.groupParent}>
        <div className={styles.sellerParent}>
          <div className={styles.seller}>
            <div className={styles.sellerChild} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller1}>
            <div className={styles.sellerChild} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller2}>
            <div className={styles.sellerChild} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller3}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1}/>
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller4}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller5}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller6}>
            <div className={styles.sellerChild} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller7}>
            <div className={styles.sellerChild} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
          <div className={styles.seller8}>
            <div className={styles.sellerChild} />
            <img
              className={styles.creator1Icon}
              alt=""
              src={img1}
            />
            <img className={styles.photo1Icon} alt="" src={img1} />
            <b className={styles.johnWick}>John Wick</b>
          </div>
         
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
          <div className={styles.loremIpsumDolor9}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla
            id leo felis fringilla est.
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
        <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
        <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.trendingWrapper}>
       <Link to='/stats'><div className={styles.trending}>Trending</div></Link>
        </div>
        <div className={styles.allFashionNftsWrapper}>
          <div className={styles.trending}> NFTs</div>
        </div>
        <div className={styles.artWrapper}>
          <div className={styles.trending}>Art</div>
        </div>
        <div className={styles.artWrapper}>
          <div className={styles.trending}>Fashion</div>
        </div>
        <div className={styles.creatorsWrapper}>
          <div className={styles.trending}>Creators</div>
        </div>
        <div className={styles.allFashionNftsWrapper}>
          <div className={styles.trending}>Brands</div>
        </div>
      </div>
      
 
    </div>
<Footer/>
    </div>
  );
};

export default ExplorePage;
