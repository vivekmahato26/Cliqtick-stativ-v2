import React, { useContext, useRef, useState } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";

import styles from "./nav.module.scss";


import { ScrollContext } from "../context";

export default function Navbar() {
  let location = useLocation();
  let history = useHistory();
  const { workRef, contactFormRef, pricingRef } = useContext(ScrollContext);

  const handleSelect = (arg) => {
    switch (arg) {
      case 1:
        if (location.pathname !== "/") {
          history.push("/");
        }
        break;
      case 2:
        if (location.pathname === "/") {
          workRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
          history.push("/our-work");
        }
        break;
      case 3:
        if (location.pathname === "/") {
          break;
        }
        if (location.pathname === "/social-media-management") {
          pricingRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (location.pathname === "/seo") {
          pricingRef.current.scrollIntoView({ behavior: "smooth" });
        }

        break;
      case 4:
        contactFormRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
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
        <div className={styles.relative}>
          <ul className={styles.linkContainer}>
            <Link to="/">
              <li onClick={() => handleSelect(1)}>Home</li>
            </Link>
            <div className={styles.verticalLine}></div>
            <li className={styles.service}>
              Our Services
              <span className={styles.serviceItem}>
                {/* <Link to="/marketing-team">
                  <p>Dedicated Marketing Team</p>
                </Link> */}
                <Link to="/social-media-management">
                  <p>Social Media Management</p>
                </Link>
                <Link to="/advertising">
                  <p>Social Media Advertisment</p>
                </Link>
                <Link to="/seo">
                  <p>Search Engine Optimization</p>
                </Link>
              </span>
            </li>
            <div className={styles.verticalLine}></div>
            <li onClick={() => handleSelect(2)}>Our Work</li>
            <div className={styles.verticalLine}></div>
            <li onClick={() => handleSelect(3)}>Pricing</li>
            <div className={styles.verticalLine}></div>
            <li onClick={() => handleSelect(4)}>Contact Us</li>
          </ul>
        </div>
        <div className={styles.social}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/cliqtickmarketing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FFB%20Icon.png?alt=media&token=e86dcda7-05c5-4821-80b3-6e66644e47ed"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/cliqtickmarketing/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FInstagram%20Icon.png?alt=media&token=6a0b727d-3f3e-4238-a4c8-13c0b2599293"
                alt="instagram"
              />
            </a>
            <a
              href="https://www.twitter.com/Cliqtick"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FTwitter%20Icon.png?alt=media&token=8aa61627-44d1-43d9-a7f7-1074cf165bd7"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cliqtick"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FLinkedin%20Icon.png?alt=media&token=1369ee31-ee0f-45fd-8e88-a925912f00a2"
                alt="linkedin"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC-GB5n67o99GoJJm3F95xmA"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FYoutube%20Icon.png?alt=media&token=799d99df-ebe7-478b-bf6b-2b0aae2b5b14"
                alt="youtube"
              />
            </a>
          </div>
          <div className={styles.whatsapp}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FWhatsapp%20Icon.png?alt=media&token=d8deaa1c-d865-4561-a5dd-0a3bb48998ea"
              alt="whatsapp"
            />
            <p>+91 912 194 7554</p>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
          <ul className={styles.linkContainer}>
            <Link to="/">
              <li onClick={() => handleSelect(1)}>Home</li>
            </Link>
            <div className={styles.verticalLine}></div>
            <li className={styles.service}>
              Our Services
              <span className={styles.serviceItem}>
                {/* <Link to="/marketing-team">
                  <p>Dedicated Marketing Team</p>
                </Link> */}
                <Link to="/social-media-management">
                  <p>Social Media Management</p>
                </Link>
                <Link to="/advertising">
                  <p>Social Media Advertisment</p>
                </Link>
                <Link to="/seo">
                  <p>Search Engine Optimization</p>
                </Link>
              </span>
            </li>
            <div className={styles.verticalLine}></div>
            <li onClick={() => handleSelect(2)}>Our Work</li>
            <div className={styles.verticalLine}></div>
            <li onClick={() => handleSelect(3)}>Pricing</li>
            <div className={styles.verticalLine}></div>
            <li onClick={() => handleSelect(4)}>Contact Us</li>
          </ul>
        </div>
     </>
  );
}
