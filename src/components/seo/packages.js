import React, { useState , useContext } from "react";

import styles from "./packages.module.scss";

import Collapsible from "../collapsible";

import {ScrollContext} from "../context";

export default function Packages() {
  const [active, setActive] = useState(-1);

  const {pricingRef} = useContext(ScrollContext);

  const SEOContent = [
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 1) {
                return 0;
              } else {
                return 1;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F1.png?alt=media&token=457c0f97-f73c-49e5-a629-c3970e3735cb"
            alt="Website Audit"
          />
          <p>Website Audit</p>
          <div
            className={`${styles.verticalLine} ${
              active === 1 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Search Engine Friendly Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Link Popularity Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Keywords Research and Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Duplicate content analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Website Structure analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Competitor Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Detailed SEO Plan</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 2) {
                return 0;
              } else {
                return 2;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F2.png?alt=media&token=c2752c7e-28c1-41e5-8083-7be39db40da0"
            alt="SEO Compatibility Check"
          />
          <div>
            <p>SEO Compatibility</p>
            <p>Check</p>
          </div>
          <div
            className={`${styles.verticalLine} ${
              active === 2 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Broken Links Check</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Page Size Check</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>W3C Validation Check*</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Browser Compatibility Check</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 3) {
                return 0;
              } else {
                return 3;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F3.png?alt=media&token=7a09a90c-c454-467d-ad77-63829c4e798c"
            alt="On-Page Optimization"
          />
          <div>
            <p>On-Page</p>
            <p>Optimization</p>
          </div>
          <div
            className={`${styles.verticalLine} ${
              active === 3 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>URL Mapping</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>URL Rewriting</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Title Tag Optimization</td>
              <td>Up to 10 pages</td>
              <td>Up to 20 pages</td>
              <td>Up to 40 pages</td>
              <td>Up to 80 pages</td>
            </tr>
            <tr>
              <td>Meta Tags Optimization</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Keyword Density, Proximity &amp; Prominence Check</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Anchor Text Optimization</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Alt Tag Optimization</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Custom 404 error page setup</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Google Analytic Account Setup</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Webmaster Tools (Google/Bing)Account Set Up</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>SEO Header Tag Optimization</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Exiting Content Optimization</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>New Page Creation (If Required)</td>
              <td>Up to 3</td>
              <td>Up to 5</td>
              <td>Up to 10</td>
              <td>Up to 15</td>
            </tr>
            <tr>
              <td>URL Canonicalization Check</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Robots.Txt Optimization</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>XML and TXT Sitemap Generation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 4) {
                return 0;
              } else {
                return 4;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F3.png?alt=media&token=7a09a90c-c454-467d-ad77-63829c4e798c"
            alt="Off-Page Optimization and Link Building"
          />
          <div>
            <p>Off-Page</p>
            <p>Optimization and</p>
            <p>Link Building</p>
          </div>
          <div
            className={`${styles.verticalLine} ${
              active === 4 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Social Bookmarking</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Article Submission</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Article Social Bookmarking</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Press Release Submission**</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Classifieds Submissions</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 5) {
                return 0;
              } else {
                return 5;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F4.png?alt=media&token=ec69115c-ac2f-4ed7-81f6-976d0c00e8fc"
            alt="SEO Content Creation"
          />
          <p>SEO Content Creation</p>
          <div
            className={`${styles.verticalLine} ${
              active === 5 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Article Writing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Press Release Writing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Review Writing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 6) {
                return 0;
              } else {
                return 6;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F3.png?alt=media&token=7a09a90c-c454-467d-ad77-63829c4e798c"
            alt="Local Search Website Optimization"
          />
          <div>
            <p>Loacl Search</p>
            <p>Website</p>
            <p>optimization</p>
          </div>
          <div
            className={`${styles.verticalLine} ${
              active === 6 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Local Search Engine Submission</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Updating local listing Pages</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>GEO Tagging</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Google Business Listing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Yahoo Basic Business Listing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Bing Places Listing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 7) {
                return 0;
              } else {
                return 7;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F5.png?alt=media&token=7d050063-3592-44bd-9b28-3d696e7deb72"
            alt="Blog Optimization"
          />
          <p>Blog Optimization</p>
          <div
            className={`${styles.verticalLine} ${
              active === 7 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Blog Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Blog Writing#</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Blog Directory Submission</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Blog RSS Submission</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 8) {
                return 0;
              } else {
                return 8;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F6.png?alt=media&token=97b5b95c-8034-4210-951d-cf4aec038126"
            alt="Social Media Optimization"
          />
          <div>
            <p>Social Media</p>
            <p>Optimization</p>
          </div>
          <div
            className={`${styles.verticalLine} ${
              active === 8 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Facebook Fan Page Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Facebook TimeLine Design</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                Facebook Fan Page Like
                <br />
                Integration
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Twitter Page Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Twitter Background Design</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Twitter Follow Button Integration</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Google+ Page Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Google + Button Integration</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>LinkedIn Profile Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>LinkedIn Company Page Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Regular Updates</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Photo Sharing</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Web 2.0 Profile Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 9) {
                return 0;
              } else {
                return 9;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F7.png?alt=media&token=86386151-ee51-43b7-9eae-fa8814d1fd72"
            alt="Video Promotion"
          />
          <p>Video Promotion</p>
          <div
            className={`${styles.verticalLine} ${
              active === 9 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>YouTube Channel Creation</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                YouTube - Custom background
                <br />
                design and CSS
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                Video Submission to Other
                <br />
                Video Websites
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 10) {
                return 0;
              } else {
                return 10;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F8.png?alt=media&token=aedf19ac-7e62-4601-b42c-99cdb1038cb7"
            alt="Web Usability &amp; Conversion"
          />
          <div>
            <p>Web Usability</p>
            <p>&amp; Conversion</p>
          </div>
          <div
            className={`${styles.verticalLine} ${
              active === 10 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>
                Existing Website Designing
                <br />
                Consultation
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Landing Page Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Enquiry Page Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                Enquiry Page Modification
                <br />
                Suggestions
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Mobile Compatibility Suggestions</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F14.png?alt=media&token=98e39b37-b36f-41a6-bcfd-6f6a92460a36"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.heading}
          onClick={() =>
            setActive(() => {
              if (active === 11) {
                return 0;
              } else {
                return 11;
              }
            })
          }
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F9.png?alt=media&token=32918b31-080d-4c04-925f-9db389efbee4"
            alt="Reporting"
          />
          <p>Reporting</p>
          <div
            className={`${styles.verticalLine} ${
              active === 11 ? styles.active : ""
            }`}
          />
          <div className={styles.horizontalLine} />
        </div>
      ),
      children: (
        <div className={`${styles.details}`}>
          <table>
            <tr>
              <td>Traffic Log Analysis</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Keywords Ranking Report</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Monthly Progress Reports</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Customer Support (Email, Chat)</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Project Manager</td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
              <td>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fseo%2F13.png?alt=media&token=52735017-02fd-4731-9d00-f20a9e4080ad"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>
      ),
    },
  ];
  return (
    <>
      <section className={styles.packages} ref={pricingRef}>
        <div className={styles.container}>
          <div className={styles.head}>
            <div className={styles.package}>
              <h2>Starter</h2>
              <h3>10</h3>
              <p>keywords to be </p>
              <p>optimized</p>
            </div>
            <div className={`${styles.bronze} ${styles.package}`}>
              <h2>Bronze</h2>
              <h3>20</h3>
              <p>keywords to be </p>
              <p>optimized</p>
              <span>Most Popular</span>
            </div>
            <div className={styles.package}>
              <h2>Silver</h2>
              <h3>40</h3>
              <p>keywords to be </p>
              <p>optimized</p>
            </div>
            <div className={styles.package}>
              <h2>Gold</h2>
              <h3>80</h3>
              <p>keywords to be </p>
              <p>optimized</p>
            </div>
          </div>
          <div className={styles.content}>
            {SEOContent.map((s) => {
              return (
                <Collapsible title={s.title}>
                  {s.children}
                </Collapsible>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
