import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import SignIn from "./views/AuthenticationView/SignInView";
import SignUp from "./views/AuthenticationView/SignUpView";
import JsCookie from "./cookies/views";


function App() {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<CookiesProvider><SignIn /></CookiesProvider>} />
        <Route path="/jsCookie" element={<JsCookie />} />
      </Routes>
    </>
  );
}

export default App;
