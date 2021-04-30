import React from "react";
import Packages from "./packages";

import styles from "./seo.module.scss";

export default function Seo() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>SEO Packages that fit every budget!</h1>
          <p>
            We also offer Custom Packages in case our Standard Packages don't
            suit.
          </p>
          <span>EXPLORE SEO PACKAGES &#62;&#62;</span>
        </div>
      </section>
      <h3 className={styles.seoTitle}>
        SEO Packages India, Affordable Search Engine Optimization Packages
        India, SEO Services Prices India
      </h3>
      <section className={styles.seo}>
        <div className={styles.container}>
          <p>
            At SEO Experts India, our rates are just a small fraction of the
            return on investment that we ensure. We realize that each business
            is different and therefore we customize our packages based on the
            requirements of your business. Our SEO service packages are
            developed keeping in mind the small as well as large businesses.
          </p>
          <p>
            What's more? All our SEO Packages come with no contract/commitment,
            which means you've got the option to terminate, upgrade or downgrade
            whenever you want. Please have a look at the following affordable
            SEO packages and choose the one that suits you the best.
          </p>
        </div>
      </section>
      <Packages />
      <section className={styles.chat}>
        <div className={styles.container}>
          <h2>Know More about pricing of packages</h2>
          <span>
            Chat now
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F10.png?alt=media&token=34895b76-0d4a-48de-8fc3-b053876287f7"
              alt="Chat Now"
            />
          </span>
          <h4>WHY OUTSOURCE SEO SERVICES TO INDIA?</h4>
        </div>
      </section>
      <section className={styles.results}>
        <div className={styles.container}>
          <h2>We have a Track Record of Delivering Excellent Results.</h2>
          <h3>
            Below is a selection of our Clients enjoying Page #1 Rankings on
            Google &amp; other Major Search Engines.
          </h3>
          <div className={styles.flex}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F11.png?alt=media&token=bc80fa91-c445-4308-8fda-bd495564e95e" alt="" />
            <span>
              <h4>Name</h4>
              <p>
                At SEO Experts India, our rates are just a small fraction of the
                return on investment that we ensure.We realize that each
                business is different and therefore we customize our packages
                based on the requirements of your business. Our SEO service
                packages are developed keeping in mind the small as well as
                large businesses.
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
