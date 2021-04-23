import React, { useState,  useContext } from "react";

import { ScrollContext } from "../context";
import styles from "./pricing.module.scss";

import Contact from "../contact";

export default function Pricing() {
  const { contactFormRef, pricingRef } = useContext(ScrollContext);
  const [active, setActive] = useState(0);

  const handleBooknow = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <>
      {/* <section className={styles.hero}>
        <div className={styles.container}>
          <h2>For startups, small and medium enterprises</h2>
          <h2>that require day to day marketing activities</h2>
          <div>
            <p>
              The plans we offer include whole-team with a range of
              capabilities,
            </p>
            <p>
              dedicated social media teams, video production teams and stellar support
            </p>
          </div>
        </div>
      </section>*/}
      <section className={styles.pricing} ref={pricingRef}> 
          <h2>Pricing</h2>
        <div className={styles.container}>
          <div className={styles.price}>
            <div className={styles.vertical1}></div>
            <div className={styles.priceText}>
              <h2>2,000$</h2>
              <p>Per Month/</p>
              <p>Billed Quaterly</p>
            </div>
            <h2>Level 1</h2>
            <div className={`${styles.item} ${styles.margin10}`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>Cover Basic graphic and presentation design</p>
            </div>
            <div className={`${styles.item} ${styles.margin10}`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>100 Hours/ Month</p>
            </div>
            <div className={`${styles.item} ${styles.margin10}`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>
                A dedicated social media team with 1 Senior graphic designer, 1
                Experienced marketing manager
              </p>
            </div>
            <div className={`${styles.item} ${styles.margin10}`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>1 Dedicated Project manager</p>
            </div>
            <div className={`${styles.item} ${styles.margin10}`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>24/7 Dedicated Support</p>
            </div>
            <p className={styles.bookNow} onClick={handleBooknow}>Book Now</p>
          </div>
          <div className={styles.price}>
            <div className={styles.vertical1}></div>
            <div className={styles.priceText}>
              <h2>3,500$</h2>
              <p>Per Month/</p>
              <p>Billed Quaterly</p>
            </div>
            <h2>Level 2</h2>
            <div className={styles.item}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>Cover Basic graphic and presentation design</p>
            </div>
            <div className={styles.item}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>160 Hours/ Month</p>
            </div>
            <div className={styles.item}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>
                Dedicated 2D-Animation team, with design Director, 2D-Animator
              </p>
            </div>
            <div className={styles.item}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>
                A dedicated social media team with 2 Senior graphic designer, 1
                Experienced marketing manager
              </p>
            </div>
            <div className={styles.item}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>1 Dedicated Project manager</p>
            </div>
            <div className={`${styles.item} ${styles.mb22}`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
                alt="tick"
              />
              <p>24/7 Dedicated Support</p>
            </div>
            <p className={styles.bookNow} onClick={handleBooknow}>Book Now</p>
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            <div className={styles.question} onClick={() => setActive(active === 1 ? 0 : 1)}>
              <p>What do you mean by basic design?</p>
              <img className={active === 1 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 1 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              At cliqtick we have a team of dedicated Graphic Designers
              well-versed in the latest trends in the market and sound knowledge
              of the best design tools. We don’t look at designs and creativity
              from a standalone point of view but focus on the overall outcome
              our design products generate. Here’s what we mean by basic design
            </p>
            <ul>
              <li>Logo/Branding And Stationary Design</li>
              <li>Web Design</li>
              <li>Landing Pages Design</li>
              <li>Newsletters Design</li>
              <li>Display Banners</li>
              <li>Other Graphics &amp; Digital Assets</li>
            </ul>
          </div>
          <div className={styles.faqContainer}>
            <div className={styles.question} onClick={() => setActive(active === 2 ? 0 : 2)}>
              <p>How do I know which plan is right for me?</p>
              <img className={active === 2 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 2 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              We can help guide you! Just book a call with us and we'll figure
              it out based on your team's needs. Let's find the best option,
              together.
            </p>
          </div>

          <div className={styles.faqContainer} onClick={() => setActive(active === 3 ? 0 : 3)}>
            <div className={styles.question}>
              <p>What billing options do you offer?</p>
              <img className={active === 3 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 3 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              We offer credit card billing or invoicing depending on the plan
              you choose.
            </p>
          </div>
          <div className={styles.faqContainer} onClick={() => setActive(active === 4 ? 0 : 4)}>
            <div className={styles.question}>
              <p>Can I choose my dedicated design team and project manager?</p>
              <img className={active === 4 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 4 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              Our process is designed to eliminate all waste and keep this
              hassle-free for you, our customer. You will work exclusively with
              your dedicated project managers and will not need to have any face
              time with the dedicated designers.
            </p>
          </div>
          <div className={styles.faqContainer} onClick={() => setActive(active === 5 ? 0 : 5)}>
            <div className={styles.question}>
              <p>Do you sign a non disclosure agreement?</p>
              <img className={active === 5 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 5 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              Yes we do sign the non-disclosure agreements with clients when
              requested for. This is done to protect their confidentiality,
              trade secrets and business information. We understand the roles
              and responsibilities working for our clients behind the scenes.
            </p>
          </div>
          <div className={styles.faqContainer} onClick={() => setActive(active === 6 ? 0 : 6)}>
            <div className={styles.question}>
              <p>What happens in case of unavailability of my resource?</p>
              <img className={active === 6 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 6 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              All leaves and offs are planned well in advance and communicated
              to our clients accordingly. We avoid unavailability of resources
              for petty reasons that can hamper schedule. In case of health and
              other emergency leaves a suitable replacement to best suit the
              needs of our clients is made available.
            </p>
          </div>
          <div className={styles.faqContainer} onClick={() => setActive(active === 7 ? 0 : 7)}>
            <div className={styles.question}>
              <p>
                How do you ensure quality resources to meet our requirements?
              </p>
              <img className={active === 7 && styles.rotate}
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.answer} ${
              active === 7 ? styles.scale1 : styles.scale0
            }`}
          >
            <p>
              We have a thorough talent acquisition process and hire the best of
              people who bring in technical knowledge and good communication
              skills. From domain knowledge and language skills to personality
              tests, we provide the best candidates to meet the niche
              requirements of the clients.
            </p>
          </div>
        </div>
      </section>
     <Contact page="team"/>
    </>
  );
}
