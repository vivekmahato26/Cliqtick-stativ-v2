import React, { useContext } from "react";

import { ScrollContext } from "../context";
import styles from "./smd.module.scss";

export default function Smd({pricingRef}) {
  const {  smmPricingRef } = useContext(ScrollContext);
  const { contactFormRef } = useContext(ScrollContext);
  const handlePricingClick = () => {
    smmPricingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <section className={styles.smd}>
        <div className={styles.container}>
          <h2>Getting started is easy</h2>
          <div className={styles.subContainer}>
            <div>
              <div className={styles.subContainer1} onClick={handlePricingClick}>
                <div className={styles.content}>
                    <h1 className={styles.subtitle}>#1 Choose &amp; Order</h1>
                    <p className={styles.description}>
                      Once you place the order, one of Cliqtick digital
                      marketing managers will schedule a call within 24hrs
                      through Zoom, Skype or Google Meet
                    </p>
                    <button className={styles.button} >Our Pricing</button>
                </div>
                <div className={styles.img}>
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_4.png?alt=media&token=5032c052-d00b-4aa3-a826-c8eac0734b83"
                   
                    alt="order"
                  />
                </div>
              </div>
              <div className={styles.subContainer2}>
                <div className={styles.img}>
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_5.png?alt=media&token=734df09a-fa35-47cf-8f07-ecc0c5002451"
                   
                    alt="content"
                  />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.subtitle}>#2 Audit Call</h1>
                    <p className={styles.description}>
                      Here we try to understand your business and audit your
                      social media presence. If you don’t have any social media
                      profiles then we create a new one for you. Optimise them
                      with the unique bio and instagram highlights.
                    </p>
                  </div>
              </div>
              <div className={styles.subContainer3}>
                <div className={styles.content}>
                    <h1 className={styles.subtitle}>
                      #3 Action Plan / Content Calendar
                    </h1>
                    <p className={styles.description}>
                      Considering your valuable inputs, we internally research
                      and discuss to create a perfect action plan and content
                      calendar as per your requirements and share the same with
                      you for your approval.
                    </p>
                </div>
                <div className={styles.img}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_6.png?alt=media&token=70bb4a6f-6a1d-4aa5-bace-08668da4dfa9"
                    
                    alt="calendar"
                  />
                </div>
              </div>
              <div className={styles.subContainer4}>
                <div className={styles.img}>
                  <img
                  
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_7.png?alt=media&token=d1062c50-35a2-49f7-bff4-a512ae567a22"
                   
                    alt="team"
                  />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.subtitle}>#4 Design Team</h1>
                    <p className={styles.description}>
                      Once you approve, content manager with design team starts
                      designing your social media posts and share the same with
                      you for your approval.
                    </p>
                </div>
              </div>
              <div className={styles.subContainer5} onClick={handleContactClick}>
                <div className={styles.content}>
                      <h1 className={styles.subtitle}>Any Questions?</h1>
                      <button className={styles.button}>Contact Us</button>
                </div>
                <div className={styles.img}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FImg_8.png?alt=media&token=0f607a63-a5c4-4c6c-8db9-be369ba3e955"
                    alt="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
