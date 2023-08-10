import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/AuthenticationView/SignUpView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
