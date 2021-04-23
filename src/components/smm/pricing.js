import React, { useContext } from "react";

import { ScrollContext } from "../context";
import styles from "./pricing.module.scss";

export default function Pricing() {
  const { contactFormRef } = useContext(ScrollContext);
  const handleBooknow = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const pricing = [
    <div
      key={Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")}
      className={styles.price}
    >
      <div className={styles.pricing}>
        <h3>Basic</h3>
        <p>
          <span>£150</span>per month/
        </p>
        <span className={styles.text}>billed quaterly</span>
      </div>
      <div className={`content ${styles.serviceContent}`}>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>12 Social Media Posts</p>
        </div>
        <span className={styles.serviceOptions}>Size: 1080 x 1350 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>1 creative video</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Facebook Cover</p>
        </div>
        <span className={styles.serviceOptions}>Size: 820 x 312 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>
            Original Content Creation for Social Media Platforms
          </p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Social Media Calendar</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Initial Campaign Strategy</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Smart Hashtag Research</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Post Scheduling</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Only one platform</p>
        </div>
      </div>
      <h2 onClick={handleBooknow}>Book Now</h2>
    </div>,
    <div
      key={Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")}
      className={styles.price}
    >
      <div className={styles.pricing}>
        {" "}
        <h3>Standard</h3>
        <p>
          <span>£250</span>per month/
        </p>
        <span className={styles.text}>billed quaterly</span>
      </div>
      <div className={`content ${styles.serviceContent}`}>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>20 Social Media Posts</p>
        </div>
        <span className={styles.serviceOptions}>Size: 1080 x 1350 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>2 creative videos</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Facebook Cover</p>
        </div>
        <span className={styles.serviceOptions}>Size: 820 x 312 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Twitter Cover </p>
        </div>
        <span className={styles.serviceOptions}>Size: 1500 x 500 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>LinkedIn Cover</p>
        </div>
        <span className={styles.serviceOptions}>Size: 1584 x 396 Pixels</span>

        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>
            Original Content Creation for Social Media Platforms
          </p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Social Media Calendar</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Initial Campaign Strategy</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Smart Hashtag Research</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Post Scheduling</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Platforms: Upto two platforms</p>
        </div>
      </div>
      <h2 onClick={handleBooknow}>Book Now</h2>
    </div>,
    <div
      key={Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")}
      className={styles.price}
    >
      <div className={styles.pricing}>
        {" "}
        <h3>Premium</h3>
        <p>
          <span>£350</span>per month/
        </p>
        <span className={styles.text}>billed quaterly</span>
      </div>
      <div className={`content ${styles.serviceContent}`}>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>30 Social Media Posts</p>
        </div>
        <span className={styles.serviceOptions}>Size: 1080 x 1350 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>5 creative videos</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Facebook Cover</p>
        </div>
        <span className={styles.serviceOptions}>Size: 820 x 312 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Twitter Cover </p>
        </div>
        <span className={styles.serviceOptions}>Size: 1500 x 500 Pixels</span>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>LinkedIn Cover</p>
        </div>
        <span className={styles.serviceOptions}>Size: 1584 x 396 Pixels</span>

        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>
            Original Content Creation for Social Media Platforms
          </p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Social Media Calendar</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Smart Hashtag Research</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Post Scheduling</p>
        </div>
        <div className={styles.flexContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftick.png?alt=media&token=72279fb5-7ae3-45ab-a5da-321f065c3416"
            alt="check mark"
          />
          <p className={styles.serviceItem}>Platforms: Upto four platforms</p>
        </div>
      </div>
      <h2 onClick={handleBooknow}>Book Now</h2>
    </div>,
  ];
  return (
    <>
      <section className={styles.pricing}>
        <div className={styles.container}>
          <h5>Pricing</h5>
          <div className={styles.pricingContainer}>
            {pricing.map((p) => {
              return p;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
