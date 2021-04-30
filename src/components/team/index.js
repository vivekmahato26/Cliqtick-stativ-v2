import React, { useContext } from "react";

import Pricing from "../pricing";

import styles from "./team.module.scss";

import { ScrollContext } from "../context";

import { Link} from "react-router-dom";



export default function Home() {

  const { homeRef, workRef } = useContext(ScrollContext);
  return (
    <>
      <section className={styles.hero} id="hero" ref={homeRef}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <h1>Hire a Social Media Team</h1>
            <h2>Get Your Work Done From Any</h2>
            <h2>Corner of the world</h2>
            <h3>Starting from US$ 2000 / Month</h3>
          </div>
        </div>
      </section>
      <section className={styles.reviews}>
        <div className={styles.container}>
          <h2>Our Reviews</h2>
          <div className={styles.reviewContainer}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FGoogle%20Review%20Logo.png?alt=media&token=a19fe341-df51-4645-964e-6a7e523aabcb"
              alt="Google Review"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FClutch%20Logo.png?alt=media&token=6ebf044b-5cc6-4799-8ac7-af1a27457922"
              alt="Clutch"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FGood%20Firms%20Logo.png?alt=media&token=ff2fa681-5d7f-463b-8f89-25f86c689b4a"
              alt="Good Firms"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FDesign%20Rush%20Logo.png?alt=media&token=dd0a73ae-0125-4462-9e67-3bc450a7891e"
              alt="Design Rush"
            />
          </div>
        </div>
      </section>
      <section className={styles.ourTeam} id="team">
        <div className={styles.container}>
          <span>
            <p>We are an</p>
            <p>extention of</p>
            <p>your in-house</p>
            <p>Team</p>
          </span>
          <div className={styles.videoContainer}>
            <video
              className={styles.video}
              about="Cliqtick Introduction"
              controls
              width="100%"
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FIntro%202.mp4?alt=media&token=05e4a4ed-b09a-4e03-9cd7-c9ac8661e476"
            />
          </div>
        </div>
      </section>
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <span>
            <h2>Why Choose Us ?</h2>
            <p>
              We are India based startup company with 5+ years experience in
              managing social media Profiles, increasing online sales, brand
              awareness and website traffic through the effective use of social
              media Whether you're looking for a great strategy to grow your
              brand and awareness or just don't have the time for social media,
              we are here to help.
            </p>
            <p>
              Cliqtick provides fulltime experts in social media management,
              graphics design and ad management at affordable cost for your
              business.
            </p>
          </span>
          <div>
            <video
              className={styles.video}
              about="Cliqtick Introduction"
              controls={false}
              muted
              autoPlay
              loop
              width="100%"
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FLooking%201.mp4?alt=media&token=600f15df-8c50-49ac-99a5-7100539c82f7"
            />
          </div>
        </div>
      </section>
      <section className={styles.promise}>
        <div className={styles.container}>
          <h2>CLIQTICK Promises it all</h2>
          <span>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Frocket.png?alt=media&token=2c002eaf-eef4-4daa-aefb-4ea1f4c96dba"
                alt="Faster"
              />
              <p>Faster</p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fwork.png?alt=media&token=d3213d5a-3a6a-49c3-a827-08adce3621bb"
                alt="Cheaper"
              />
              <p>Cheaper</p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fastronaut.png?alt=media&token=855ec420-16b9-4f00-add8-4d164115882b"
                alt="Reliable"
              />
              <p>Reliable</p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftap.png?alt=media&token=f24a8017-09e7-4f74-b47f-3013792f8cda"
                alt="Easier"
              />
              <p>Easier</p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fwall-clock.png?alt=media&token=d52db2db-c9cf-42f2-a638-485aff3e6135"
                alt="Operational in 24 HRS"
              />
              <p>Operational </p>
              <p>in 24 HRS</p>
            </div>
          </span>
        </div>
      </section>
      <section className={styles.ourWork} id="work" ref={workRef}>
        <div className={styles.container}>
          <h2>Our Works</h2>
          <div className={styles.subContainer}>
            <div className={styles.workContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FSM%20Works.png?alt=media&token=adacd66a-76d9-4d6b-ae1e-4c5b9fd11660"
                alt="Social Media Designs"
              />
              <div className={styles.textContainer}>
                <h3>Social Media</h3>
                <h3>Designs</h3>
                <Link to={{pathname:"/our-work",category:"smm"}}>
                  <p>View More</p>
                </Link>
              </div>
              <div className={styles.whiteSpace}></div>
            </div>
            <div className={styles.workContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FMotion%20Graphics.png?alt=media&token=2ce03e57-9cdc-4411-a467-4229614060a2"
                alt="Motion Graphics Work"
              />
              <div className={styles.textContainer}>
                <h3>Motion Graphics</h3>
                <h3>Work</h3>
                <Link to={{pathname:"/our-work",category:"motion"}}>
                  <p>View More</p>
                </Link>
              </div>
              <div className={styles.whiteSpace}></div>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.workContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FVideo%20Works.png?alt=media&token=807fcb25-4058-456d-8b64-0432d62b2942"
                alt="Video Works"
              />
              <div className={styles.textContainer}>
                <h3>Video Works</h3>
                <Link to={{pathname:"/our-work",category:"video"}}>
                  <p className={styles.videoWorks}>View More</p>
                </Link>
              </div>
              <div className={styles.whiteSpace}></div>
            </div>
            <div className={styles.workContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FFacebook%20Ads.png?alt=media&token=ce4a9fd5-300d-4b62-8da9-fc659a56cc70"
                alt="Facebook Ad Results"
              />
              <div className={styles.textContainer}>
                <h3>Facebook Ad</h3>
                <h3>Results</h3>
                <p>View More</p>
              </div>
              <div className={styles.whiteSpace}></div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
    </>
  );
}
