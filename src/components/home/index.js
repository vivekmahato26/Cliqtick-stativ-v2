import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss";

import { ScrollContext } from "../context";

import styles from "./home.module.scss";

export default function Home() {
  const { workRef } = useContext(ScrollContext);
  const nextArrow = (
    <img
      className={styles.nextArrow}
      src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FRight%20Arrow%20(1).png?alt=media&token=0a718a88-ae1a-4cdd-b9fe-c4c80a6aeea2"
      alt="next"
    />
  );
  const prevArrow = (
    <img
      className={styles.prevArrow}
      src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FLeft%20Arrow%20(1).png?alt=media&token=e0c11e47-3d80-4ef1-aff7-b833bc55fc05"
      alt="prev"
    />
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    dotsClass: styles.indicators,
    slidesPerRow: 1,
    centerPadding: "50%",
  };
  const settingsReviews = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    dots: true,
    dotsClass: styles.indicators,
    slidesPerRow: 2,
    centerPadding: "50%",
    nextArrow,
    prevArrow,
  };
  const settingsReviewsM = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    dots: true,
    dotsClass: styles.indicators,
    slidesPerRow: 1,
    centerPadding: "50%",
    nextArrow,
    prevArrow,
  };

  const reviews = [
    {
      name: "Abhishek Chauhan",
      position: "Marketing Head",
      message:
        "The services they provided for my business was out of box idea which was unique of its own and a team creativity mind set to initialize at its best is what makes Cliqtick stand out among other competitors in the world of Social Media Management",
    },
    {
      name: "Swetha Singh",
      position: "Business Owner",
      message:
        "Cliqtick is a trustworthy company, they were able to obtain a higher margin beyond the expected margin for our social media handles. We saw steady growth in our Facebook, Twitter, Instagram and Linkedin accounts and gained many loyal customers through it",
    },
    {
      name: "Anderson Han",
      position: "Digital Marketing Manager",
      message: `Great company to work with. The contents they created my company's social media profile were attractive and well detailed which was impressive to me and many out there which generated higher revenue for our company`,
    },
    {
      name: "Kevin Arthur",
      position: "Sales Head",
      message:
        "Cliqtick was recommended to me by one of my friends. They certainly lived beyond my expectation, with less charge they were able to do a better job, and will recommend my other friends and family for their businesses",
    },
    {
      name: "Nitin Sheker",
      position: "Real Estate Agent",
      message:
        "Cliqtick is what completes my social media profile, the work was handled well and that is what I had expected from their creative team.We will continue to work with them as they had and will continue to create better impact on our business",
    },
  ];
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Is your social media working?</h1>
          <h3>A Social Media</h3>
          <h3>Agency</h3>
          <p>Free social media analysis</p>
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.container}>
          <div>
            <h3>Real Results</h3>
            <p>
              Forget vanity metrics like Facebook likes or Twitter followers.
            </p>
            <p> We’re about leads, customers and sales.</p>
            <p className={styles.anchor}>Learn More</p>
          </div>
          <div>
            <h3>Month to month</h3>
            <p>
              No long term contracts up front. We create a risk free environment
            </p>
            <p> to work with us where we earn the work every month.</p>
            <p className={styles.anchor}>Learn More</p>
          </div>
          <div>
            <h3>We're virtual</h3>
            <p>We’re a distributed global team. That means industry </p>
            <p>leading accessibility and responsiveness to you.</p>
            <p className={styles.anchor}>Learn More</p>
          </div>
        </div>
      </section>
      <section className={styles.clients}>
        <div className={styles.container}>
          <h2>Who We Work With</h2>
          <div className={styles.desktop}>
            <Slider {...settings}>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo1.png?alt=media&token=c3898771-0bc8-43f1-a9a1-327033d1b1e7"
                  alt="Dr. Maxx Care"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo20%20(1).png?alt=media&token=ace814df-2f4d-44e1-8150-60b721c59b53"
                  alt="Unbound"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo3.png?alt=media&token=f0263605-7967-4e40-afed-27898c3a18d4"
                  alt="momozz"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo17%20(1).png?alt=media&token=b143570d-654d-43ad-9987-4555c480b8c9"
                  alt="Global Assist"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo18%20(2)%20(1).png?alt=media&token=85f07128-23ba-47a3-bc02-b424c447bf80"
                  alt="Immigration Master"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo19%20(1).png?alt=media&token=8275f8eb-6f95-422b-b901-afdcd96143db"
                  alt="Vevibes"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo4.png?alt=media&token=2d38a0e7-3868-4538-9b28-7c6f95eeee37"
                  alt="Med 7"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Faliensgroup.png?alt=media&token=131d56f4-08bd-4947-90af-ae1d8bc419ab"
                  alt="Aliens Group"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Faltmart.jpg?alt=media&token=ed8969d6-b101-4d2f-9f21-8c191ea0605e"
                  alt="Alt Mart"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fcocktailsrestraunt.jpg?alt=media&token=6286ee6d-46ce-4d7d-8b38-2563d783cf39"
                  alt="Cocktails"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fdonatekart.jpg?alt=media&token=98c549c2-c01b-48f2-9f4b-7dc46dbc493e"
                  alt="Donatekart"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Ffemcare.jpg?alt=media&token=ea53ba3d-f396-4aeb-88e8-6f20a02ed22f"
                  alt="Femcare"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fgradright.png?alt=media&token=7362c3f4-b6d8-46ab-b875-47e373cc03d1"
                  alt="Grad Right"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fholeinthewall.jpg?alt=media&token=992bee95-ce43-40d3-9d1f-5f0703a498c7"
                  alt="Hole in the wall"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Frisinia.png?alt=media&token=ccaa21fd-621d-4952-8193-2c192de947f6"
                  alt="Risinia"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fshriandsam.png?alt=media&token=a4d9cace-62b1-48fb-8daa-a1e2031baef7"
                  alt="Shri &amp; sam"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fswiflearn.png?alt=media&token=a39e9107-1ef2-4cec-bb75-1d117987b713"
                  alt="Swiflearn"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fthemintleaf.jpg?alt=media&token=6254a7df-e1b1-467d-8cc8-ed731d817881"
                  alt="The Mint Leaf"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fwontonmomos.png?alt=media&token=b195dc9d-8016-477a-84b9-401adbc644c3"
                  alt="Wonton Momos"
                />
              </div>
            </Slider>
          </div>
          <div className={styles.mobile}>
            <Slider {...settings}>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo1.png?alt=media&token=c3898771-0bc8-43f1-a9a1-327033d1b1e7"
                  alt="Dr. Maxx Care"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo20%20(1).png?alt=media&token=ace814df-2f4d-44e1-8150-60b721c59b53"
                  alt="Unbound"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo3.png?alt=media&token=f0263605-7967-4e40-afed-27898c3a18d4"
                  alt="momozz"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo17%20(1).png?alt=media&token=b143570d-654d-43ad-9987-4555c480b8c9"
                  alt="Global Assist"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo18%20(2)%20(1).png?alt=media&token=85f07128-23ba-47a3-bc02-b424c447bf80"
                  alt="Immigration Master"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo19%20(1).png?alt=media&token=8275f8eb-6f95-422b-b901-afdcd96143db"
                  alt="Vevibes"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2FLogo4.png?alt=media&token=2d38a0e7-3868-4538-9b28-7c6f95eeee37"
                  alt="Med 7"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Faliensgroup.png?alt=media&token=131d56f4-08bd-4947-90af-ae1d8bc419ab"
                  alt="Aliens Group"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Faltmart.jpg?alt=media&token=ed8969d6-b101-4d2f-9f21-8c191ea0605e"
                  alt="Alt Mart"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fcocktailsrestraunt.jpg?alt=media&token=6286ee6d-46ce-4d7d-8b38-2563d783cf39"
                  alt="Cocktails"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fdonatekart.jpg?alt=media&token=98c549c2-c01b-48f2-9f4b-7dc46dbc493e"
                  alt="Donatekart"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Ffemcare.jpg?alt=media&token=ea53ba3d-f396-4aeb-88e8-6f20a02ed22f"
                  alt="Femcare"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fgradright.png?alt=media&token=7362c3f4-b6d8-46ab-b875-47e373cc03d1"
                  alt="Grad Right"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fholeinthewall.jpg?alt=media&token=992bee95-ce43-40d3-9d1f-5f0703a498c7"
                  alt="Hole in the wall"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Frisinia.png?alt=media&token=ccaa21fd-621d-4952-8193-2c192de947f6"
                  alt="Risinia"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fshriandsam.png?alt=media&token=a4d9cace-62b1-48fb-8daa-a1e2031baef7"
                  alt="Shri &amp; sam"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fswiflearn.png?alt=media&token=a39e9107-1ef2-4cec-bb75-1d117987b713"
                  alt="Swiflearn"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fthemintleaf.jpg?alt=media&token=6254a7df-e1b1-467d-8cc8-ed731d817881"
                  alt="The Mint Leaf"
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fclients%2Fwontonmomos.png?alt=media&token=b195dc9d-8016-477a-84b9-401adbc644c3"
                  alt="Wonton Momos"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <img
              className={styles.logo}
              src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Flogo%20trimmed.png?alt=media&token=3121c8f6-44d4-47f6-ac5d-cc74297625b5"
              alt="Cliqtick"
            />
            <span>
              <h3>A social media agency - </h3>
              <h3>Social media marketing</h3>
            </span>
          </div>
          <div className={styles.content}>
            <div className={styles.leftContainer}>
              <h2>Our Story</h2>
              <p>
                We are India based startup company with 5+ years experience in
                managing social media Profiles, increasing online sales, brand
                awareness and website traffic through the effective use of
                social media.
              </p>
              <p>
                Whether you're looking for a great strategy to grow your brand
                and awareness or just don't have the time for social media, we
                are here to help.
              </p>
            </div>
            <div className={styles.rightContainer}>
              <video
                className={styles.video}
                about="Cliqtick Introduction"
                controls
                width="100%"
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FIntro%202.mp4?alt=media&token=05e4a4ed-b09a-4e03-9cd7-c9ac8661e476"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whatwedo}>
        <div className={styles.container}>
          <h2>What We Do</h2>
          <div className={styles.content}>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FSocial%20Media%20Management%20Icon.png?alt=media&token=5dd41ad2-bd16-42a9-a93d-74990f6ea951"
                alt="Social Media Management"
              />
              <h3>Social Media</h3>
              <h3>Management</h3>
              <p>
                Full social media management including content, channel,
                strategy and reporting management.Whether you're looking for a
                great strategy to grow your brand and awareness or just don't
                have the time for social media, we are here to help.
              </p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FSocial%20Media%20Advertising%20Icon.png?alt=media&token=aa21880a-f3ce-4e73-8131-cbc560795dd0"
                alt="Social Media Advertising"
              />
              <h3>Social Media</h3>
              <h3>Advertising</h3>
              <p>
                Every good social media strategy involves paid. We deliver world
                class results and make your budget stretch.
              </p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FSEO%20Icon.png?alt=media&token=27ccfd9d-33d8-4688-ab87-3f4d5736d906"
                alt="SEO"
              />
              <h3 className={styles.mth}>SEO</h3>
              <p className={styles.mtp}>
                We have proven SEO packages to rank page #1 for your major
                keywords- increasing traffic by more than 286% on average.
              </p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fnew%20homepage%2FSocial%20Media%20Team.png?alt=media&token=a3a1a0cf-90c0-4df6-80dd-8d139a6ea9f5"
                alt="Social Media Team"
              />
              <h3>Social Media</h3>
              <h3>Team</h3>
              <p>
                Increase your B2B lead generation by leveraging our LinkedIn
                Social Sales campaign strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.review}>
        <div className={styles.container}>
          <h2>DON’T JUST TAKE OUR WORD FOR IT</h2>
          <div className={styles.desktop}>
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
          <div className={styles.mobile}>
            <div className={styles.reviewContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FGoogle%20Review%20Logo.png?alt=media&token=a19fe341-df51-4645-964e-6a7e523aabcb"
                alt="Google Review"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FClutch%20Logo.png?alt=media&token=6ebf044b-5cc6-4799-8ac7-af1a27457922"
                alt="Clutch"
              />
            </div>
            <div className={styles.reviewContainer}>
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
        </div>
      </section>
      <srction className={styles.work} ref={workRef}>
        <div className={styles.container}>
          <h2>Latest from our team</h2>
          <div className={styles.workContent}>
            <div className={styles.left}>
              <div className={styles.row}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fimages%2FPost8.jpg?alt=media&token=76fc213a-a009-4b29-aed6-c89f34169dbc"
                  alt="Post 1"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fimages%2FPost7.jpg?alt=media&token=fb506039-9bcd-4438-adeb-71ea3e569656"
                  alt="Post 2"
                />
              </div>
              <div className={styles.row}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fimages%2FPost%2017%20Preganancy.jpg?alt=media&token=ece63eed-c5c9-47db-acfb-a8916d1553cf"
                  alt="Post 1"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fimages%2FUnbound%20Vaccination%20Day%20Post.jpg?alt=media&token=2b66b6ae-f21a-4dc6-8ea4-00b41095daba"
                  alt="Post 2"
                />
              </div>
              <h2>OUR DESIGN WORKS</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.row}>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.video}
                    about="Unbound Promo"
                    controls
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FUnbound%20Promo.mp4?alt=media&token=b1226550-8195-45b6-a2ea-89c9b97cf508"
                  />
                </div>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.video}
                    about="Momozz Promo"
                    controls
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FMomozz%20Promo.mp4?alt=media&token=1e38de11-958a-4cd2-9937-399557c62c74"
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.video}
                    about="Med7 Promo"
                    controls
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FMed%207%20Promo.mp4?alt=media&token=62e398b5-e886-4b73-adcb-4788644fbf2f"
                  />
                </div>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.video}
                    about="Vevibes Natural Milk"
                    controls
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FVevibes%20Natural%20Milk.mp4?alt=media&token=6e340b95-6a3e-4832-bcdc-cf656fb4b431"
                  />
                </div>
              </div>
              <h2>OUR VIDEO WORKS</h2>
            </div>
          </div>
          <Link to="/our-work">
            <h5>View More</h5>
          </Link>
        </div>
      </srction>
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.head}>
            <p>What our clients say</p>
            <h3>Testimonials</h3>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.crousal}>
            <div className={styles.desktop}>
              <Slider {...settingsReviews}>
                {reviews.map((r) => {
                  return (
                    <div className="review">
                      <h2>{r.name}</h2>
                      <h3>{r.position}</h3>
                      <p>{r.message}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className={styles.mobile}>
              <Slider {...settingsReviewsM}>
                {reviews.map((r) => {
                  return (
                    <div className="review">
                      <h2>{r.name}</h2>
                      <h3>{r.position}</h3>
                      <p>{r.message}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
