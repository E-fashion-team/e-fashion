import { FunctionComponent, useCallback } from "react";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  const onNewUserCreateClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  return (
    <div className={styles.signIn}>
      <div className={styles.signInChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.exploreTheWorld}>
          Explore the world of meta fashion
        </b>
        <div
          className={styles.newUserCreateContainer}
          onClick={onNewUserCreateClick}
        >
          <span>New user?</span>
          <span className={styles.createAnAccount}> Create an account</span>
        </div>
        <div className={styles.or}>Or</div>
        <div   className={styles.emailAddressParent1}>
        <input className={styles.emailAddress}/>Email Address
        </div>
        <div className={styles.emailAddressParent}>
          <input className={styles.emailAddress}/>Email Address
          <div className={styles.groupItem} /> </div>
        
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.groupParent}>
            <img
              className={styles.groupIcon}
              alt=""
             
            />
            <div className={styles.continueWithGoogle}>
              Continue With Google
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <img className={styles.groupIcon1} alt=""  />
          <div className={styles.continueWithFacebook}>
            Continue With Facebook
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <img className={styles.vectorIcon} alt=""  />
          <div className={styles.continueWithFacebook}>Continue With Apple</div>
        </div>
      </div>
      <img className={styles.image8Icon} alt=""  />
      <div className={styles.signIn1}>Sign In</div>
      <div className={styles.continueWrapper}>
        <div className={styles.continue}>Continue</div>
      </div>
    </div>
  );
};

export default SignIn;
