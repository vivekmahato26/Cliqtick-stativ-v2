import React, { useContext, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./nav.module.scss";

import {ScrollContext} from "../context";

export default function Navbar() {
  const [style, setStyle] = useState();
  const navBackground = useRef();
  const {homeRef,workRef,contactRef,contactFormRef} = useContext(ScrollContext);
  const location = useLocation();

  const handleSelect = (arg) => {
    switch (arg) {
      case 1:
        setStyle((prev) => {
          var left = "2.5vw";
          if (window.innerWidth > 1367) {
            left = "2vw";
          }
          return { left: left };
        });
        if(location.pathname === "/") {
          homeRef.current.scrollIntoView({behavior: 'smooth'})
        }
        break;
      case 2:
        setStyle((prev) => {
          var left = "12vw";
          if (window.innerWidth > 1367) {
            left = "9vw";
          }
          return { left: left };
        });
        if(location.pathname === "/") {
          workRef.current.scrollIntoView({behavior: 'smooth'})
        }
        break;
      case 3:
        setStyle((prev) => {
          var left = "21vw";
          if (window.innerWidth > 1367) {
            left = "15vw";
          }
          return { left: left };
        });
        break;
      case 4:
        setStyle((prev) => {
          var left = "31vw";
          if (window.innerWidth > 1367) {
            left = "22vw";
          }
          return { left: left };
        });
        if(location.pathname === "/") {
          contactRef.current.scrollIntoView({behavior: 'smooth'})
        }
        if(location.pathname === "/pricing") {
          contactFormRef.current.scrollIntoView({behavior: "smooth"})
        }
        break;
      default:
        setStyle((prev) => {
          var left = "2.5vw";
          if (window.innerWidth > 1367) {
            left = "2vw";
          }
          return { left: left };
        });
        break;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Flogo%20trimmed.png?alt=media&token=3121c8f6-44d4-47f6-ac5d-cc74297625b5"
          alt="Cliqtick"
        />
        <div className={styles.spacer}></div>
        <div className={styles.relative}>
          <ul className={styles.linkContainer}>
            <Link to="/">
              <li onClick={() => handleSelect(1)}>Home</li>
            </Link>
            <Link to="/">
              <li onClick={() => handleSelect(2)}>Our Work</li>
            </Link>
            <Link to="/pricing">
              <li onClick={() => handleSelect(3)}>Pricing</li>
            </Link>
              <li onClick={() => handleSelect(4)}>Contact Us</li>
          </ul>
          <div
            className={styles.active}
            ref={navBackground}
            style={style}
          ></div>
        </div>
      </div>
    </>
  );
}
