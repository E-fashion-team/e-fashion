import React,{ FunctionComponent, useCallback } from "react";
import "../SignIn.css";

const SignIn: FunctionComponent = () => {
  const onNewUserCreateClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  return (
    <div className="sign-in">
      <div className="sign-in-child" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <b className="explore-the-world">Explore the world of meta fashion</b>
        <div
          className="new-user-create-container"
          onClick={onNewUserCreateClick}
        >
          <span>New user?</span>
          <span className="create-an-account"> Create an account</span>
        </div>
        <div className="or">Or</div>
        <div className="email-address-parent">
          <div className="email-address">Email Address</div>
          <div className="group-item" />
        </div>
        <div className="rectangle-group">
          <div className="group-inner" />
          <div className="group-parent">
            <img className="group-icon" alt="" src="/group-48095561.svg" />
            <div className="continue-with-google">Continue With Google</div>
          </div>
        </div>
        <div className="rectangle-container">
          <div className="rectangle-div" />
          <img className="group-icon1" alt="" src="/group.svg" />
          <div className="continue-with-facebook">Continue With Facebook</div>
        </div>
        <div className="group-div">
          <div className="group-child1" />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="continue-with-facebook">Continue With Apple</div>
        </div>
      </div>
      <img className="image-8-icon" alt="" src="/image-8@2x.png" />
      <div className="sign-in1">Sign In</div>
      <div className="continue-wrapper">
        <div className="continue">Continue</div>
      </div>
    </div>
  );
};

export default SignIn;
