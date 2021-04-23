import React from "react";

import styles from "./process.module.scss";

export default function Process() {
  return (
    <>
      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Our Process</h2>
          <div className={styles.subContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_4.png?alt=media&token=fedb513c-551c-4ef6-b65e-c0a8c142ad17" alt="#1 EXPERT SOCIAL MEDIA MANAGER AT YOUR SERVICE" />
            <span className={styles.verticalLine} />
            <div className={styles.content}>
              <h3 className={styles.title}>
                #1 EXPERT SOCIAL MEDIA MANAGER AT YOUR SERVICE
              </h3>
              <p className={styles.desc}>
                We’ll assign an ad specialist on our staff to run your social
                media ads. This person will learn about your business goals,
                develop an advertising strategy and execute.
              </p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_5.png?alt=media&token=6e33f2c2-279e-45ac-a687-7aa75ed33c00" alt="#2 DEVELOP A SOCIAL ADVERTISING STRATEGY" />
            <span className={styles.verticalLine} />
            <div className={styles.content}>
              <h3 className={styles.title}>
                #2 DEVELOP A SOCIAL ADVERTISING STRATEGY
              </h3>
              <p className={styles.desc}>
                We will develop a clear concise ad strategy for your business.
                It will include proven advertising funnels to show you how
                Cliqtick will turn strangers into website traffic and
                conversations.
              </p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_6.png?alt=media&token=c76a843a-02a6-4b1e-b692-63431805ed49" alt="#3 Create engaging advertisements" />
            <span className={styles.verticalLine} />
            <div className={styles.content}>
              <h3 className={styles.title}>
                #3 Create engaging advertisements
              </h3>
              <p className={styles.desc}>
                Launch Ads that people actually click on our Ad specialists will
                write your copy, headlines and develop images for your campain.
              </p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_7.png?alt=media&token=5677f9aa-2dc5-498f-8d90-7c162ac3864b" alt="#4 MONITOR YOUR ADS AND OPTIMIZE" />
            <span className={styles.verticalLine} />
            <div className={styles.content}>
              <h3 className={styles.title}>#4 MONITOR YOUR ADS AND OPTIMIZE</h3>
              <p className={styles.desc}>
                We’ll monitor campaign hourly, daily and weekly. If results
                decline, we’ll detect it and pause low perfoming ads. In
                additin, we’ll launch new ads keep positive results coming in.
              </p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_8.png?alt=media&token=a607fada-11be-4193-ac83-fa3eeccd595d" alt="#5 STRATEGY EVOLUTION" />
            <span className={styles.verticalLine} />
            <div className={styles.content}>
              <h3 className={styles.title}>#5 STRATEGY EVOLUTION</h3>
              <p className={styles.desc}>
                Through Consistent Analystics, Cliqtick trends to identify
                larger strategy adjustments. A Social Media Strategy must evolve
                to stay relevant. Consistent Analytics makes this happen.
              </p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsma%2FImg_9.png?alt=media&token=704843e8-3435-4ffe-be44-df5655b93b0f" alt="#6 MONTHLY ANALYTICS" />
            <span className={styles.verticalLine} />
            <div className={styles.content}>
              <h3 className={styles.title}>#6 MONTHLY ANALYTICS</h3>
              <p className={styles.desc}>
                Monthly reports keep us all on the same page and identify what
                needs to change (or) scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
