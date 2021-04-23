import React, { useContext, useRef, useState } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";

import styles from "./nav.module.scss";
import "./nav.scss";

import { ScrollContext } from "../context";

export default function Navbar() {
  let location = useLocation();
  let history = useHistory();
  var left;
  if (location.pathname === "/") {
    left = "1.5vw";
  }
  if (location.pathname === "/our-work") {
    left = "25vw";
  }
  const [style, setStyle] = useState({ left: left });
  const navBackground = useRef();
  const { homeRef, workRef, contactFormRef, pricingRef } = useContext(
    ScrollContext
  );
  const [toggle, setToggle] = useState(true);
  const toggleMenu = useRef();
  const sideMenu = useRef();

  function toggleNav() {
    if (toggle) {
      sideMenu.current.classList.add("open-side-nav");
    } else {
      sideMenu.current.classList.remove("open-side-nav");
    }
  }

  function toggleH() {
    setToggle(!toggle);
    if (toggleMenu.current) {
      if (toggleMenu.current.classList.contains("toggle-menu--clicked")) {
        toggleMenu.current.classList.remove("toggle-menu--clicked");
      } else {
        toggleMenu.current.classList.add("toggle-menu--clicked");
      }
    }
    toggleNav();
  }

  const handleSelect = (arg) => {
    switch (arg) {
      case 1:
        setStyle((prev) => {
          var left = "2.5vw";
          if (window.innerWidth > 1367) {
            left = "2vw";
          }
          if (window.innerWidth > 770 && window.innerWidth < 1100) {
            left = "2vw";
          }
          if (window.innerWidth > 1370) {
            left = "1.5vw";
          }
          return { left: left };
        });
        if (location.pathname === "/") {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 2:
        setStyle((prev) => {
          var left = "19.5vw";
          if (window.innerWidth > 1367) {
            left = "19.5vw";
          }
          if (window.innerWidth > 770 && window.innerWidth < 1100) {
            left = "25vw";
          }
          if (window.innerWidth > 1370) {
            left = "13vw";
          }
          return { left: left };
        });

        if (location.pathname === "/") {
          workRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
          history.push("/our-work");
        }
        break;
      case 3:
        setStyle((prev) => {
          var left = "27vw";
          if (window.innerWidth > 1367) {
            left = "27vw";
          }
          if (window.innerWidth > 770 && window.innerWidth < 1100) {
            left = "34vw";
          }
          if (window.innerWidth > 1370) {
            left = "18.2vw";
          }
          return { left: left };
        });
        if (location.pathname === "/") {
          pricingRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
          history.push("/");
        }
        break;
      case 4:
        setStyle((prev) => {
          var left = "35vw";
          if (window.innerWidth > 1367) {
            left = "23.5vw";
          }
          if (window.innerWidth > 770 && window.innerWidth < 1100) {
            left = "44vw";
          }
          return { left: left };
        });
        contactFormRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        setStyle((prev) => {
          var left = "2.5vw";
          if (window.innerWidth > 1367) {
            left = "1.5vw";
          }
          return { left: left };
        });
        break;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Flogo%20trimmed.png?alt=media&token=3121c8f6-44d4-47f6-ac5d-cc74297625b5"
            alt="Cliqtick"
          />
        </Link>

        <div className={styles.spacer}></div>
        <div
          ref={toggleMenu}
          onClick={toggleH}
          className="toggle-menu"
          data-toggle-menu
        >
          <span className="menu__bar"></span>
          <span className="menu__bar"></span>
          <span className="menu__bar"></span>
        </div>
        <div className={styles.relative}>
          <ul className={styles.linkContainer}>
            <Link to="/">
              <li onClick={() => handleSelect(1)}>Home</li>
            </Link>
            <li className={styles.service}>
              Our Services
              <span className={styles.serviceItem}>
                <Link to="/social-media-management">
                  <p>Social Media Management</p>
                </Link>
                <Link to="/advertising">
                  <p>Social Media Advertisment</p>
                </Link>
              </span>
            </li>
            <li onClick={() => handleSelect(2)}>Our Work</li>
            <li onClick={() => handleSelect(3)}>Pricing</li>
            <li onClick={() => handleSelect(4)}>Contact Us</li>
          </ul>
          <div
            className={styles.active}
            ref={navBackground}
            style={style}
          ></div>
        </div>
      </div>
      <div id="sideBar" ref={sideMenu} className="collapsible menu-close">
        <div className="collapsibleContainer">
          <div className={`mainMenu ${styles.navItems}`}>
          <li>
              <Link to="/social-media-management" onClick={() => handleSelect(2)}>
                <p onClick={toggleH} className={` ${styles.navItem}`}>
                  Social Media Management
                </p>
              </Link>
            </li>
            <li>
              <Link to="/advertising" onClick={() => handleSelect(2)}>
                <p onClick={toggleH} className={` ${styles.navItem}`}>
                  Social Media Advertising
                </p>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleSelect(2)}>
                <p onClick={toggleH} className={` ${styles.navItem}`}>
                  Our Work
                </p>
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => handleSelect(3)}>
                <p onClick={toggleH} className={` ${styles.navItem}`}>
                  Prices
                </p>
              </Link>
            </li>

            <li>
              <Link to="/" onClick={() => handleSelect(4)}>
                <p onClick={toggleH} className={` ${styles.navItem}`}>
                  Contact Us
                </p>
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                width="25px"
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fwhatsapp.svg?alt=media&token=4b48cf13-7748-441b-a94f-9a70eaa0242a"
                alt="WhatsApp us At 9121947554"
              />
              <a
                rel="noreferrer"
                className={`navbar-item ${styles.navItem}`}
                style={{ padding: "0 5px" }}
                href="https://api.whatsapp.com/send?phone=+919121947554"
                target="_blank"
              >
                WhatsApp Us
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
