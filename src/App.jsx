import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
