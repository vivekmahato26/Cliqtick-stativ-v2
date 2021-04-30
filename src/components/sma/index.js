import React, { useContext } from "react";

import { ScrollContext } from "../context";
import styles from "./sma.module.scss";
import Faq from "./faq";
import Sap from "./sap";
import Contact from "../contact";
import Manage from "./manage";

export default function Advertising() {
  const { contactFormRef } = useContext(ScrollContext);
  const handleContactClick = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <span>
              <h2 className={styles.heroTitle}>
               Hire An Ad Manager
              </h2>
            </span>
            <div className={styles.heroDesc}>
              <p>
                Dedicated Team of Top Designers, Content Writers &amp; Digital
                Marketers.
              </p>
              <p>Fast turn arounds. Reliable and Affordable</p>
            </div>
            <div className={styles.flex}>
              <p className={styles.buttonP} onClick={handleContactClick}>Contact Us</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.smp}  id="smp">
        <div className={styles.container}>
          <h2
          >
            Important Aspects of Social Media 
          </h2>
          <h2>Advertising Marketing</h2>
          <div className={`columns `}>
            <div
              key={Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")}
            >
              <span >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_1.png?alt=media&token=fdae03e4-3c67-4a2c-9b13-ffec8b4313a7"
                  alt="Marketing Strategy"
                />
                <p className={styles.cardTitle}>Marketing Strategy</p>
              </span>
            </div>
            <div
              key={Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")}
            >
              <span >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_2%20(1).png?alt=media&token=b9012143-0ed0-4fe6-89ef-66b91b542024"
                  alt="Targeting"
                />
                <p className={styles.cardTitle}>
                  Ad Targeting / Retargeting Campaign
                </p>
              </span>
            </div>
            <div
              key={Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")}
            >
              <span >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_3.png?alt=media&token=26245975-7523-4d16-9ce3-a66b5cc53619"
                  alt="design and copy writing"
                />
                <p className={styles.cardTitle}>Copy Writing &amp; Designing</p>
              </span>
             
            </div>
          </div>
        </div>
      </section>
      <Sap />
      <Manage/>
      <Faq />
      <Contact page="sma"/>
    </>
  );
}
