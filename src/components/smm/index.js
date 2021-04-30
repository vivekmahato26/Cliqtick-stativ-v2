import React, { useContext } from "react";

import { ScrollContext } from "../context";

import { Link } from "react-router-dom";

import styles from "./smm.module.scss";

import Smd from "./smd";
import Pricing from "./pricing";
import Faq from "./faq";

import Contact from "../contact";

export default function Management() {
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
              <h2>
                <span className={styles.colorY}>H</span>ire a{" "}
                <span className={styles.colorP}>S</span>ocial{" "}
                <span className={styles.colorB}>M</span>edia{" "}
                <span className={styles.colorG}>M</span>anager
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
              <Link to="/our-work">
                <p className={styles.buttonA}>Our Portfolio</p>
              </Link>
              <p className={styles.buttonP} onClick={handleContactClick}>
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.smp}>
        <div className={styles.container}>
          <h2>Why are social media platforms</h2>
          <h2> important to your business ?</h2>
          <div>
            <div className={styles.tab}>
              <span>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_1.png?alt=media&token=75e50095-e8da-4a82-af99-9165e0824d5d"
                  alt="Get Attention &amp; Build Awareness"
                />
                <p className={styles.cardTitle}>
                  Get Attention &amp; Build Awareness
                </p>
              </span>
              <p className={styles.cardDescription}>
                Social media boosts your business visibility among potential
                customers. This is how you stand out from your competitors?
                Written Articles, Videos, Images, Offers or Promotions,
                Infographics, Quizzes or Polls.
              </p>
            </div>
            <div className={styles.tab}>
              <span>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_2.png?alt=media&token=aaa83682-1831-4643-91c7-eab952b5b015"
                  alt="Show Authenticity"
                />
                <p className={styles.cardTitle}>Show Authenticity</p>
              </span>
              <p className={styles.cardDescription}>
                Demonstrating Authenticity on social media is all about showing
                real side of your brand (or) business to your followers.
                According to survey done in canada 91% of consumers say that
                they are willing to reward a brand for its authenticity with a
                purchase, investment or endorsement.
              </p>
            </div>
            <div className={styles.tab}>
              <span>
                <img
                  className={styles.mt18}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_3.png?alt=media&token=51af0e2d-22fa-4042-b219-e515580237e8"
                  alt="Encourage Engagement"
                />
                <p className={styles.cardTitle}>Encourage Engagement</p>
              </span>
              <p className={styles.cardDescription}>
                Its not about looking popular, its about marketing meaningful
                connections with current and future customers. Which will serve
                to boost your brand both online and offline.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Smd />
      <Pricing />
      <Faq />
      <Contact page="smm" />
    </>
  );
}
