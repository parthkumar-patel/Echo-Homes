import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  getAuth,
} from "firebase/auth";
import Success from "../components/Success";

const SignUp = () => {
  const [verified, setVerified] = useState(false);
  const { user } = UserAuth();
  const navigate = useNavigate();
  const auth = getAuth();

  function handleNavigateToLogIn() {
    return navigate("/login");
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.elements.displayName.value;
    const email = e.target.elements.signup_email.value;
    const password = e.target.elements.password.value;

    verify();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        try {
          await updateProfile(cred.user, { displayName: displayName });
          console.log("User created:", cred.user);
          e.target.reset();
        } catch (err) {
          console.error("Error updating profile:", err.message);
        }
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  };

  const verify = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Verification email sent");
        setVerified(true);
      })
      .catch((error) => {
        console.error("Error sending verification email:", error.message);
      });
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="sign-up-form-container">
      {verified && (
        <Success msg="Password reset email sent to your email address!" />
      )}
      <p className="title">Create account</p>
      <form className="form" onSubmit={handleSignupSubmit}>
        <input
          type="text"
          id="name"
          name="displayName"
          className="input"
          placeholder="Name"
        />
        <input
          type="email"
          id="signup_email"
          name="signup_email"
          className="input"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <button type="submit" className="form-btn">
          Create account
        </button>
      </form>
      <div onClick={handleNavigateToLogIn}>
        <p className="sign-up-label">
          Already have an account?
          <span className="sign-up-link">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
