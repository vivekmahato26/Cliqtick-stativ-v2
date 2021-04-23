import React, { useState } from "react";

import {useLocation} from "react-router-dom";

import Masonry from "react-masonry-css";

import styles from "./work.module.scss";
import "./masonry.scss";

export default function Work({ category }) {
  var temp = "all";
  const location = useLocation();
  switch(location.category) {
    case "smm": temp = "smm"; break;
    case "video": temp = "video"; break;
    case "motion": temp = "motion"; break;
    default: temp = "all"; break;
  }
  const [active,setActive] = useState(temp);
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/1.mp4?alt=media&token=4646adcb-7572-433e-a0e8-f284b09cd394",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/2.mp4?alt=media&token=64e8d38e-bb89-4976-91c0-1f10c524f2f6",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/3.mp4?alt=media&token=eb011cc7-02be-4995-b9aa-f1313fbd3935",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/3D.mp4?alt=media&token=95975da4-32af-49bf-85ce-181824d2268c",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/4.mp4?alt=media&token=7b140d8c-00dd-48f4-b3ea-01e680329ae6",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/5.mp4?alt=media&token=bb8aeeb2-b37b-4e6d-ab65-e5a06db674f8",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/6.mp4?alt=media&token=9acfca5a-f51d-47e1-8466-47962cfd4179",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/7.mp4?alt=media&token=844deb50-a071-4dcd-98d8-3ce391eb93db",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/8.mp4?alt=media&token=c3f81da5-5e9a-4103-b168-2b04e1113bee",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/9.mp4?alt=media&token=1e0e5893-acb4-42e8-bd4e-87def914ef2f",
  ];

  const smm = [
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FAvenue%20Reality.mp4?alt=media&token=c1227129-1323-44c3-8de9-eb11a603df81",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FCosmetique.mp4?alt=media&token=e3761b9a-2e93-4575-a3f0-da279c66c825",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FDr%20Maxx%20Care.mp4?alt=media&token=8e6888e2-e50d-4edb-87a5-d3e741f1e28f",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FHustle%20Hard.mp4?alt=media&token=83ee9076-4915-4438-a36a-2214047bf663",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FLets%20Unbound.mp4?alt=media&token=5aae2713-ea16-44c3-bea4-75e2fc49fcc9",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FMomozz.mp4?alt=media&token=97166ec5-24bf-4359-9ca6-7ea276cb5f5b",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FPretty%20Faces.mp4?alt=media&token=09828f7a-69bf-4eb0-8bfa-7d546e5ade8f",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2FSpice%20Villa.mp4?alt=media&token=444535b4-3828-4d36-91b8-dcff868a8fae",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2Fgradright.mp4?alt=media&token=7bbe0485-dbfc-476a-9a0e-1908c887bec6",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2FSMM%2Fshriandsam.mp4?alt=media&token=441806e5-44c3-4c12-9c04-7e979322a667",
  ];

  var motion = [
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FVevibes%20natural%20soap.mp4?alt=media&token=5ab12cbf-5a87-4bb0-82cd-6996f0410506",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FVevibes%20Natural%20Milk.mp4?alt=media&token=6e340b95-6a3e-4832-bcdc-cf656fb4b431",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FUnbound%20Promo.mp4?alt=media&token=b1226550-8195-45b6-a2ea-89c9b97cf508",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FMomozz%20Promo.mp4?alt=media&token=1e38de11-958a-4cd2-9937-399557c62c74",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FMed%207%20Promo.mp4?alt=media&token=62e398b5-e886-4b73-adcb-4788644fbf2f",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FLuxespa.mp4?alt=media&token=b6a05039-5106-4c86-bf6c-5182959a9d46",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FHustle%20Hard%20Promo.mp4?alt=media&token=7ae87c19-a764-4a1e-8522-a705da7eeaca",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FFood%20Promo.mp4?alt=media&token=3ea8ee09-a0e2-41bd-840c-81fe85b53116",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FFood%20Delivery.mp4?alt=media&token=82d2ef72-1797-4c60-be05-8790d5c92eb9",
    "https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FPortfolio%2Fvideos%2FCosmetique%20Product%20Promo.mp4?alt=media&token=3f2650d6-beb0-4a44-a873-a205818884cc",
  ];

  motion = motion.reverse();

  const videoJSX = [];
  for (var v of videos) {
    videoJSX.push(
      <div key={v} className={styles.video}>
        <video muted controls src={v} width="100%" />
      </div>
    );
  }
  const smmJsx = [];
  for (var s of smm) {
    smmJsx.push(
      <div key={s} className={styles.video}>
        <video muted controls src={s} width="100%" />
      </div>
    );
  }
  const motionJsx = [];
  for (var m of motion) {
    motionJsx.push(
      <div key={m} className={styles.video}>
        <video muted loop  src={m} width="100%" autoPlay/>
      </div>
    )
  }
  const all = [...smmJsx,...motionJsx,...videoJSX];
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h2>See what we’ve made</h2>
          <p>
            We help marketing, sales and product teams reach their design
            potential.
          </p>
          <p>Have a look at some of our diverse work.</p>
        </div>
      </section>
      <section className={styles.work}>
        <div className={styles.container}>
          <ul className={styles.tabContainer}>
            <li onClick={() => {setActive("all")}} className={active === "all"?styles.active:""}>All Work Types</li>
            <li onClick={() => {setActive("smm")}} className={active === "smm"?styles.active:""}>Social Media Designs</li>
            <li onClick={() => {setActive("motion")}} className={active === "motion"?styles.active:""}>Motion Graphics</li>
            <li onClick={() => {setActive("video")}} className={active === "video"?styles.active:""}>Video Works</li>
          </ul>
          {active === "smm"&& <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {smmJsx}
          </Masonry>}
          {active === "motion"&&<Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {motionJsx}
          </Masonry>}
          {active === "video" &&<Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {videoJSX}
          </Masonry>}
          {active === "all" && <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {all}
          </Masonry>}
        </div>
      </section>
    </>
  );
}
