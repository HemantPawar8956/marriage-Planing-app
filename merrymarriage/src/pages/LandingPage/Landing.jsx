import React, { useState } from "react";
import image from "./Assets/beautiful-couple-getting-married-with-roses.png";
import styles from "./Landing.module.css";

const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [userType, setUserType] = useState("user");

  const handleToggleForm = () => setIsSignUp(!isSignUp);
  const handleToggleLoginMethod = () => setIsEmailLogin(!isEmailLogin);
  const handleUserTypeSelect = (type) => setUserType(type);

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.contentBoxContainer}>
        <div className={styles.contentBox}>
          <h3>
            <span>Guiding</span> <span>you</span> <span>Towards</span> <span>a</span> <span>Dream</span> <span>Wedding</span>
          </h3>
          <h1>Knot Perfect</h1>
          <p>
            We believe that every love story deserves a celebration as unique as the couple at its heart.
            Our dedicated team of expert planners works tirelessly to design a seamless and memorable wedding day,
            tailored to reflect your individual style, personality, and vision.
          </p>
          <div className={styles.buttonLanding}>
            <button className={styles.startPlanningBtn}>Start Planning Right Now</button>
          </div>
        </div>

        <div className={`${styles.signupFormBox} ${isSignUp ? styles.active : ""}`}>
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <div className={styles.loginMethodToggle}>
            <button className={`${styles.toggleBtn} ${isEmailLogin ? styles.active : ""}`} onClick={handleToggleLoginMethod}>
              {isEmailLogin ? (isSignUp ? "Sign Up with Phone Number" : "Login with Phone Number") : (isSignUp ? "Sign Up with Email" : "Login with Email")}
            </button>
          </div>
          {isSignUp && (
            <div className={styles.userTypeSelection}>
              <button className={`${styles.userTypeBtn} ${userType === "user" ? styles.active : ""}`} onClick={() => handleUserTypeSelect("user")}>Sign Up as User</button>
              <button className={`${styles.userTypeBtn} ${userType === "vendor" ? styles.active : ""}`} onClick={() => handleUserTypeSelect("vendor")}>Sign Up as Vendor</button>
            </div>
          )}
          <form className={styles.signupForm}>
            {isSignUp && <input type="text" placeholder="Enter your name" required />}
            {isEmailLogin ? <input type="email" placeholder="Enter your email" required /> : <input type="text" placeholder="Enter your phone number" required />}
            <input type="password" placeholder="Enter your password" required />
            <button type="submit" className={styles.submitBtn}>{isSignUp ? "Sign Up" : "Login"}</button>
          </form>
          <div className={styles.authDescription}>
            <p>
              {isSignUp ? (
                <>Already a member? <strong><a href="#" onClick={handleToggleForm} className={styles.loginLine}>Login here</a></strong></>
              ) : (
                <>Don't have an account yet? <strong><a href="#" onClick={handleToggleForm}>Sign up now</a></strong></>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;