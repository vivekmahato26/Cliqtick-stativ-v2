import React from "react";

import styles from "./manage.module.scss";

export default function Manage() {
  return (
    <>
      <section className={styles.manage}>
        <div className={styles.container}>
          <h2>What We Manage With Your Account</h2>
          <div className={styles.subContainer}>
          <img className={styles.mobile}
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FWhat%20We%20do.png?alt=media&token=d8c3b904-39e7-4e60-88f2-940021afa7ed"
              alt="manage"
            />
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_10.png?alt=media&token=083e3053-c03b-42b5-bbcc-dcd8a84afb37"
                  alt="MANAGE AD SPENDING"
                />
                <h3 className={styles.title}>MANAGE AD SPENDING</h3>
                <p className={styles.desc}>
                  We manage spending with a focus on ROI.
                </p>
              </div>
              <div className={styles.content}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_11.png?alt=media&token=43056abd-88d8-4b0d-9b30-22f4bca70971"
                  alt="BUILD CUSTOM AUDINCES"
                />
                <h3 className={styles.title}>BUILD CUSTOM AUDINCES</h3>
                <p className={styles.desc}>
                  We upload your customer lists so they can be targeted or
                  excluded from campaigns.
                </p>
              </div>
              <div className={styles.content}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_12.png?alt=media&token=441175f3-1f27-4a70-ba49-c0c613da68e1"
                  alt="MESSENGER BOTS"
                />
                <h3 className={styles.title}>MESSENGER BOTS</h3>
                <p className={styles.desc}>
                  Create custom chat experiences of your customers on ,essanger.
                </p>
              </div>
              <div className={styles.content}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_13.png?alt=media&token=92483360-56a4-4058-b816-5edf73bbd9fb"
                  alt="PIXEL IMPLEMENTATION"
                />
                <h3 className={styles.title}>PIXEL IMPLEMENTATION</h3>
                <p className={styles.desc}>
                  We verify the facebook pixel is installed and tracking
                  correctly.
                </p>
              </div>
            </div>
            <img className={styles.desktop}
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FWhat%20We%20do.png?alt=media&token=d8c3b904-39e7-4e60-88f2-940021afa7ed"
              alt="manage"
            />
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_14.png?alt=media&token=7c953033-332c-4c37-827b-1dbc8ad8f2eb"
                  alt="SET UP REMARKETING"
                />
                <h3 className={styles.title}>SET UP REMARKETING</h3>
                <p className={styles.desc}>
                  We help yo re-reach the people who have visited your site.
                </p>
              </div>
              <div className={styles.content}>
                <img className={styles.w18}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_15.png?alt=media&token=172559e9-a102-42af-80b5-9958cdd709cf"
                  alt="DYNAMIC PRODUCT ADS"
                />
                <h3 className={styles.title}>DYNAMIC PRODUCT ADS</h3>
                <p className={styles.desc}>
                  Show product ads to people who viewed your product pages.
                </p>
              </div>
              <div className={styles.content}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_16.png?alt=media&token=ee3fd0f8-3f7d-45a9-a87a-5612bf51884f"
                  alt="ADVANCED AD TECHNOLOGY"
                />
                <h3 className={styles.title}>ADVANCED AD TECHNOLOGY</h3>
                <p className={styles.desc}>
                  We help you implement ad tech for advanced accounts.
                </p>
              </div>
              <div className={styles.content}>
                <img className={styles.w18}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_17.png?alt=media&token=68398758-cd39-4787-8b03-03d2bfc04033"
                  alt="REPORTING"
                />
                <h3 className={styles.title}>REPORTING</h3>
                <p className={styles.desc}>
                  We monitor, analyze and report on your ad accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
