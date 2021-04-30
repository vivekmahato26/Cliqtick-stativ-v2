import React, { useState } from "react";

import styles from "./faq.module.scss";

import Collapsible from "../collapsible";

export default function Faq() {
  const [active, setActive] = useState(0);

  const faqArr = [
    {
      q: (
        <div
          className={styles.question}
          onClick={() => setActive(active === 1 ? 0 : 1)}
        >
          <p>Who will be working on my account?</p>
          <img
            className={active === 1 && styles.rotate}
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
            alt="arrow"
          />
        </div>
      ),
      a: (
        <div className={`${styles.answer}`}>
          <p>
            Cliqtick will provide you with full time dedicated Social Media
            Manager and Graphic Designer who are well trained and experts in
            Social Media Marketing.
          </p>
        </div>
      ),
    },
    {
      q: (
        <div
          className={styles.question}
          onClick={() => setActive(active === 2 ? 0 : 2)}
        >
          <p>How much time before you start managing my profile?</p>
          <img
            className={active === 2 && styles.rotate}
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
            alt="arrow"
          />
        </div>
      ),
      a: (
        <div className={`${styles.answer}`}>
          <p>
            When you are ready, our sales executive will walk you through MOU,
            Terms and Conditions, and Privacy Policy. Then we will assign a
            dedicated team to work on your project.
          </p>
        </div>
      ),
    },
    {
      q: (
        <div className={styles.question} onClick={() => setActive(active === 3 ? 0 : 3)}>
          <p>Do I need to give you my password? Is it safe?</p>
          <img
            className={active === 3 && styles.rotate}
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
            alt="arrow"
          />
        </div>
      ),
      a: (
        <div className={`${styles.answer}`}>
          <p>
            Yes, your password stays between you and us only! 100% safe! A
            Memorandum of Understanding (MOU) will be signed between the parties
            will also help in keeping your data and valuable information secured
            legally.
          </p>
        </div>
      ),
    },
    {
      q: (
        <div className={styles.question} onClick={() => setActive(active === 4 ? 0 : 4)}>
          <p> How do I know which plan is right for me?</p>
          <img
            className={active === 4 && styles.rotate}
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
            alt="arrow"
          />
        </div>
      ),
      a: (
        <div className={`${styles.answer}`}>
          <p>
            If you are unable to make a determination based on your company's
            needs. Book a call with us. We will guide you through the best
            option.
          </p>
        </div>
      ),
    },
    {
      q: (
        <div className={styles.question} onClick={() => setActive(active === 5 ? 0 : 5)}>
          <p>
            Can I choose my dedicated Social Media manager &amp; Graphic
            Designer?
          </p>
          <img
            className={active === 5 && styles.rotate}
            src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fdrop.png?alt=media&token=0db2857d-4f5b-4884-a17f-b53bfb970d30"
            alt="arrow"
          />
        </div>
      ),
      a: (
        <div className={`${styles.answer}`}>
          <p>
            Throughout the process, we endeavor to keep everything hassle free
            for you. It is designed to handle all of your needs directly.
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqArr.map((f) => {
              return <Collapsible title={f.q}>{f.a}</Collapsible>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
