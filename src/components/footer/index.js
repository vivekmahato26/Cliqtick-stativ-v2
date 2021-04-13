import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.columns} ${styles.marginLRAuto}`}>
          <div className="column is-10 is-offset-1">
            <div className={styles.columns}>
              <div className={styles.column1}>
                <h1 className={styles.heading}>About Us</h1>
                <p>
                  Cliqtick is a Social Media Management Company. We create,
                  design and write content for businesses to make their social
                  media pages interactive and engaging with their customers.
                </p>
                <p>Copyright © 2021 All Rights Reserved by Teman Analytics.</p>
              </div>
              <div className={`column is-one-fifth ${styles.midCol}`}>
                <h1 className={styles.heading}>Services</h1>
                <ul className={styles.anchor}>
                  <Link offset={-40} to="/pricing" spy={true} smooth={true}>
                    <li>Pricing</li>
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
              <div className="column">
                <h1 className={styles.heading}>Contact Us</h1>
                <p>Door No. 32-10-8 Sheelanagar</p>
                <p>Venkateswara colony, Street no. 8</p>
                <p>VSKP, Andhra Pradesh, India - 530012</p>
                <span className={styles.flexBox}>
                  <a
                    href="https://www.facebook.com/cliqtickmarketing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.socialImg}
                      src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ffacebook.svg?alt=media&token=375bd23d-ab0f-41c6-a272-54b8a202a262"
                      alt="fb.com/cliqtick"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/cliqtickmarketing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.socialImg}
                      src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Finstagram.svg?alt=media&token=51b522fe-120f-41d8-b49a-1af00b35cad6"
                      alt="instagram.com/cliqtick"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/Cliqtick"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.socialImg}
                      src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftwitter.svg?alt=media&token=614f9550-62ff-42f2-81f7-2c1375b5fb09"
                      alt="twitter.com/cliqtick"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cliqtick"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.socialImg}
                      src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Flinkedin.svg?alt=media&token=dabedd04-2526-4bed-9e6b-5b415c4b1b2c"
                      alt="linkedin.com/company/cliqtick"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
