import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import styles from "./footer.module.scss";

import { ScrollContext } from "../context";

export default function Footer() {
  const { pricingRef } = useContext(ScrollContext);
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/pricing") {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.columns} ${styles.marginLRAuto}`}>
          <div className={styles.column1}>
            <h1 className={styles.heading}>Contact Us</h1>
            <p className={styles.addr}>Door No. 32-10-8 Sheelanagar</p>
            <p className={styles.addr}>Venkateswara colony, Street no. 8</p>
            <p className={styles.addr}>VSKP, Andhra Pradesh, India - 530012</p>
            <div className={styles.flexbox}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FMail%20Icon.png?alt=media&token=41315942-4e7d-4bef-87a3-285e9500b962"
                alt="email"
              />
              <p>support@cliqtick.com</p>
            </div>
            <div className={styles.flex}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FPhone%20Icon.png?alt=media&token=c8413087-6f11-4a16-a142-d108ba4b2358"
                alt="call"
              />
              <span>
                <p>Call us: Monday to Friday </p>
                <p>9:30AM to 6:30PM</p>
              </span>
            </div>
            <div className={styles.flexbox}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Findia-flag-round-icon-32.png?alt=media&token=4f9185ff-f2f7-4fe3-b222-d1f30a2326ec"
                alt="IN"
              />
              <p>+91 912 194 7554</p>
            </div>
            <div className={styles.flexbox}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Funited-kingdom-flag-round-small.png?alt=media&token=7b7b5e84-6d0a-4764-b529-022fb95f0945"
                alt="UK"
              />
              <p>+44 755 395 9006</p>
            </div>
            <div className={styles.flexbox}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Funited-states-of-america-flag-round-small.png?alt=media&token=6783c5ee-4e0a-4055-8758-304be342e41d"
                alt="US"
              />
              <p>+1 716 941 4055</p>
            </div>
          </div>
          <div className={`column is-one-fifth ${styles.midCol}`}>
            <h1 className={styles.heading}>Useful Links</h1>
            <ul className={styles.anchor}>
              <Link
                offset={-40}
                to="/social-media-management"
                spy={true}
                smooth={true}
              >
                <li onClick={handleClick}>Social media management</li>
              </Link>
              <Link offset={-40} to="/advertising" spy={true} smooth={true}>
                <li onClick={handleClick}>Social media advertising</li>
              </Link>
              <li>
                <a href="/privacy" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/refund" target="_blank">
                  Refund &amp; Cancellation Policies
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h2 className={styles.heading}>Social Media</h2>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/cliqtickmarketing" target="_blank" rel="noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FFB%20Icon.png?alt=media&token=e86dcda7-05c5-4821-80b3-6e66644e47ed"
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/cliqtickmarketing/" target="_blank" rel="noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FInstagram%20Icon.png?alt=media&token=6a0b727d-3f3e-4238-a4c8-13c0b2599293"
                  alt="instagram"
                />
              </a>
              <a href="https://www.twitter.com/Cliqtick" target="_blank" rel="noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FTwitter%20Icon.png?alt=media&token=8aa61627-44d1-43d9-a7f7-1074cf165bd7"
                  alt="twitter"
                />
              </a>
              <a href="https://www.linkedin.com/company/cliqtick" target="_blank" rel="noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FLinkedin%20Icon.png?alt=media&token=1369ee31-ee0f-45fd-8e88-a925912f00a2"
                  alt="linkedin"
                />
              </a>
              <a href="https://www.youtube.com/channel/UC-GB5n67o99GoJJm3F95xmA" target="_blank" rel="noreferrer">
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
      </div>
      <p className={styles.copyright}>
        Copyright © 2021 All Rights Reserved by Teman Analytics.
      </p>
    </>
  );
}
