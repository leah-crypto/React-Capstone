import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import authCon from "./store/authCon";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Planets from "./Components/Planets";
import Photo from './Components/Photo';
import Landing from "./Components/Landing";

function App() {
  const authCtx = useContext(authCon);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route
          path="/login"
          element={!authCtx.token ? <Login /> : <Navigate to="/planets" />}
        />
        <Route path="/planets" element={<Planets/>} />
        {/* <Route path="/planets" element={authCtx.token ? <Planets/> : <Navigate to= '/'/>}/> */}
        {/* <Route path="/photo" element={<Photo />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
