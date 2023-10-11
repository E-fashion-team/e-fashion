import React,{ FunctionComponent, useCallback, useState , ChangeEvent} from "react";
import "../SignIn.css";
import img from "../images/image boy.png"
import styles from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {signinUser} from "../store/signinReduser"
import { Link } from "react-router-dom";
import SignUp from "./SignUp";


interface FormData {
  email: string;
  password: string;
}



const SignIn: FunctionComponent = () => {

  const onNewUserCreateClick = () => {
    <Link to="/signup" >
    Create an account
  </Link>
  };


  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const user = useSelector((state: RootState) => state)
  console.log(user)
  const dispatch = useDispatch<AppDispatch>()
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const { email,password } = formData
    if (!email || !password) {
      setError('Please Fill all fields');
      return;
    }
    
    dispatch(signinUser({ ...formData}));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    console.log(formData);
    ;
  };
   

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
        <span className={styles.createAnAccount} 
        onClick={onNewUserCreateClick}> Create an account</span>
      </div>
      <div className={styles.or}>Or</div>
      <div   className={styles.emailAddressParent1}>
      <input className={styles.emailAddress} name="email" type="text" placeholder="Email Address" onChange={handleChange}/>
      </div>
      <div className={styles.emailAddressParent}>
        <input className={styles.emailAddress} name="password" type="password" placeholder="Password"  onChange={handleChange}/>
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
    <img className={styles.image8Icon} alt="" src={img}  />
    <div className={styles.signIn1}>Sign In</div>
    <div className={styles.continueWrapper}>
      <div className={styles.continue} onClick={handleSubmit}>Continue</div>
    </div>
  </div>
);
};

export default SignIn;
