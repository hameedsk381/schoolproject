import Marquee from "react-fast-marquee";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Appbar from "./Components/Appbar";
import Contact from "./Components/Contact";
import Faculty from "./Components/Faculty";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Homework from "./Components/Homework";
import Imagelist from "./Components/Imagelist";
import Login from "./Components/Login";
import Profilecard from "./Components/Profilecard";
import Schoolinfo from "./Components/Schoolinfo";
import SignUp from "./Components/SignUp";
import Teacher from "./Components/Teacher";
import Teachercards from "./Components/Teachercards";

import User from "./Components/User";

function App() {
  return (
    <>
      <Appbar />
      <Marquee
        style={{
          backgroundColor: "white",
          color: "#2196f3",
          height: "43px",
          borderTop: "1px solid #ffffff",
        }}
        speed={150}
        gradient={false}
      >
        <p>hello</p>
      </Marquee>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/homework" element={<Homework/>} exact />
        <Route path="/users" element={<SignUp />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/faculty" element={<Faculty />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<User />} exact />
        <Route path="/academics" element={<Faculty />} exact />
        <Route path="/gallery" element={<Imagelist />} exact />
        <Route path="/profilecard" element={<Profilecard />} exact />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
