import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <div className="signbutton">
        <button onClick={() => dispatch(logout())}>Sign Out</button>
      </div>
    </div>
  );
};

export default Nav;
