import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import authCon from "./store/authCon";
import Login from "./Components/Login";

function App() {
  const authCtx = useContext(authCon);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/login"
          element={!authCtx.token ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
