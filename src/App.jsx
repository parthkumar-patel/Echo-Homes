import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Nav";
import Browse from "./pages/Browse";
import Onboarding from "./pagespages/Onboarding";
import HomeListing from ".//HomeListing";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/desc" element={<HomeListing />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
