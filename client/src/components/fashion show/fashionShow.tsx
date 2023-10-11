import { FunctionComponent } from "react";
import styles from "./FashionShow.module.css";

const FashionShow: FunctionComponent = () => {
  return (
    <div className={styles.fashionShow}>
      <div className={styles.fashionShowChild} />
      
      <div className={styles.mintNowWrapper}>
        <div className={styles.mintNow}>Mint</div>
      </div>
     
      <div className={styles.rectangleParent}>
        {/* ///////////////video///////////////////// */}
        <img
          className={styles.groupChild}
          alt=""
          src="/rectangle-1922@2x.png"
        />
   
      </div>
      <div className={styles.frameParent}>
       
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-1918@2x.png"
        />
{/* ////////////////////////////video 2/////////////// */}
        <div className={styles.showingParent}>
          <div className={styles.showing}>Showing :</div>
          <div className={styles.groupParent1}>
            <div className={styles.zalandoParent}>
              <div className={styles.zalando1}>Zalando</div>
              <img
                className={styles.groupIcon}
                alt=""
                src="/group-48095470.svg"
              />
            </div>
            <img className={styles.photo1Icon1} alt="" src="/photo11@2x.png" />
          </div>
        </div>
      
  
        <div className={styles.since824Am}>Since 8:24 am</div>

        <div className={styles.watchingNow}>Watching Now</div>
      </div>
      <div className={styles.xhatParent}>
        <div className={styles.xhat}>
         
         
      
         {/* /////////////////one comment/////////// */}
          
         
          <div className={styles.loremIpsumDolorParent2}>
            <div className={styles.loremIpsumDolor2}>Lorem ipsum dolor.</div>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-2605@2x.png"
            />
          </div>


          <div className={styles.topChat}>Top Chat</div>
        
          <div className={styles.xhatInner1}>
            <div className={styles.groupParent6}>
           
              <input  placeholder ="write a comment"className={styles.writeAComment}/>
           
            </div>
          </div>
        
    
        </div>
        <div className={styles.representingProducts}>Representing Products</div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.loremIpsum}>Lorem Ipsum  @farhan khan</div>
          <img
            className={styles.fakurianDesignPgdwBhdbpiUnIcon}
            alt=""
            src="/fakuriandesignpgdw-bhdbpiunsplash-1@2x.png"
          />
        
      
        </div>
       
      
 
      
        </div>
    
    </div>
  );
};

export default FashionShow;
