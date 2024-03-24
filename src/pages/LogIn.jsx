import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import "../styles/LogIn.css";

const auth = getAuth();

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const email = e.target.elements.login_email.value;
  const password = e.target.elements.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("User logged in:", cred.user);
      e.target.reset();
    })
    .catch((err) => {
      console.error("Error:", err.message);
    });
};

export default function LogIn() {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user != null) {
      navigate("/");
    }
  }, [navigate, user]);

  function handleNavigateToSignup() {
    return navigate("/signup");
  }

  function handleForgotPassword() {
    return navigate("/forgot-password");
  }

  return (
    <div className="login-form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          id="login_email"
          name="login_email"
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
        <div onClick={handleForgotPassword}>
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
        </div>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>
      <div onClick={handleNavigateToSignup}>
        <p className="sign-up-label">
          Don&apos;t have an account?
          <span className="sign-up-link">Sign up</span>
        </p>
      </div>
    </div>
  );
}
