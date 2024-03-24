// import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Success from "../components/Success";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const auth = getAuth();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.login_email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        e.target.reset();
        setSuccess(true);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setSuccess(false);
        } else {
          console.error("Error sending password reset email:", error);
        }
      });
  };

  const navigate = useNavigate();
  function handleNavigateToSignup() {
    return navigate("/signup");
  }

  return (
    <div>
      {success && (
        <Success msg="Password reset email sent to your email address!" />
      )}
      <div className="forgot-password-form-container">
        <p className="title">Forgot Password?</p>
        <form className="form" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            id="login_email"
            name="login_email"
            className="input"
            placeholder="Email"
          />
          <button type="submit" className="form-btn">
            Reset Password
          </button>
        </form>
        <div onClick={handleNavigateToSignup}>
          <p className="sign-up-label">
            Don&apos;t have an account?
            <span className="sign-up-link">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
