import React, { useState, useRef, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ScrollContext } from "../context";
import styles from "./pricing.module.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  flex: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  mr5: {
    marginRight: "5px",
    width: "50ch",
  },
  ml5: {
    marginLeft: "5px",
    width: "50ch",
  },
}));
export default function Pricing() {
  const { contactFormRef, pricingRef } = useContext(ScrollContext);
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();
  const [service, setService] = useState();
  const [fnameErr, setFnameErr] = useState({
    err: false,
    message: "",
  });
  const [lnameErr, setLnameErr] = useState({
    err: false,
    message: "",
  });
  const [emailErr, setEmailErr] = useState({
    err: false,
    message: "",
  });
  const [phoneErr, setPhoneErr] = useState({
    err: false,
    message: "",
  });
  const [companyErr, setCompanyErr] = useState({
    err: false,
    message: "",
  });

  const handleBooknow = () => {
    contactFormRef.current.scrollIntoView({behavior: "smooth"})
  }

  const handleSubmit = () => {
    const temp = {
      fname: formRef.current.fname.value,
      lname: formRef.current.lname.value,
      company: formRef.current.company.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      service,
      createdAt: new Date(),
    };
    console.log(temp);
    var error = false;
    var tempErr = {
      err: false,
      message: "",
    };
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (temp.fname === "" || temp.fname === null || temp.fname === undefined) {
      let err = {
        err: true,
        message: "Please Enter First Name",
      };

      error = true;
      setFnameErr((prev) => {
        return err;
      });
    } else {
      setFnameErr((prev) => {
        return tempErr;
      });
    }
    if (temp.lname === "" || temp.lname === null || temp.lname === undefined) {
      let err = {
        err: true,
        message: "Please Enter Last Name",
      };
      error = true;
      setLnameErr((prev) => {
        return err;
      });
    } else {
      setLnameErr((prev) => {
        return tempErr;
      });
    }
    if (temp.phone === "" || temp.phone === null || temp.phone === undefined) {
      let err = {
        err: true,
        message: "Please Enter Phone Number",
      };
      error = true;
      setPhoneErr((prev) => {
        return err;
      });
    } else {
      setPhoneErr((prev) => {
        return tempErr;
      });
    }
    if (temp.email === "" || temp.email === null || temp.email === undefined) {
      let err = {
        err: true,
        message: "Please Enter Email",
      };
      error = true;
      setEmailErr((prev) => {
        return err;
      });
    } else if (!temp.email.match(pattern)) {
      let err = {
        err: true,
        message: "Please Enter a Valid Email",
      };
      error = true;
      setEmailErr((prev) => {
        return err;
      });
    } else {
      setEmailErr((prev) => {
        return tempErr;
      });
    }
    if (
      temp.company === "" ||
      temp.company === null ||
      temp.company === undefined
    ) {
      let err = {
        err: true,
        message: "Please Enter Company Name",
      };
      error = true;
      setCompanyErr((prev) => {
        return err;
      });
    } else {
      setCompanyErr((prev) => {
        return tempErr;
      });
    }

    var type = "team";
    if (!error) {
      const requestBody = {
        query: `
      mutation {
        submitContact(input:{fname:"${temp.fname}",lname:"${temp.lname}",type:"${type}",company:"${temp.company}",phone:"${temp.phone}",email:"${temp.email}",service:"${temp.service}",createdAt:"${temp.createdAt}"}) {
          company
        }
      }
      `,
      };
      fetch("https://asia-south1-cliqtick.cloudfunctions.net/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error("Failed!");
          }
          setSuccess((prev) => {
            return true;
          });
          return res.json();
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    } else {
      return;
    }
  };
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h2>For enterprise teams that value good design and</h2>
          <h2>creativity, flexible plans are the way to go</h2>
          <div>
            <p>
              The plans we offer include whole-team with a range of
              capabilities,
            </p>
            <p>
              dedicated project managers, same-day turnarounds, stellar support
              and of course
            </p>
            <p>access to our purpose-built tech</p>
          </div>
        </div>
      </section>
      <section className={styles.pricing} ref={pricingRef}>
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
            <h2>Level 1</h2>
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
            <div className={styles.question} onClick={() => setActive(1)}>
              <p>What do you mean by basic design?</p>
              <img
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
            <div className={styles.question} onClick={() => setActive(2)}>
              <p>How do I know which plan is right for me?</p>
              <img
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

          <div className={styles.faqContainer} onClick={() => setActive(3)}>
            <div className={styles.question}>
              <p>What billing options do you offer?</p>
              <img
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
          <div className={styles.faqContainer} onClick={() => setActive(4)}>
            <div className={styles.question}>
              <p>Can I choose my dedicated design team and project manager?</p>
              <img
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
          <div className={styles.faqContainer} onClick={() => setActive(5)}>
            <div className={styles.question}>
              <p>Do you sign a non disclosure agreement?</p>
              <img
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
          <div className={styles.faqContainer} onClick={() => setActive(6)}>
            <div className={styles.question}>
              <p>What happens in case of unavailability of my resource?</p>
              <img
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
          <div className={styles.faqContainer} onClick={() => setActive(7)}>
            <div className={styles.question}>
              <p>
                How do you ensure quality resources to meet our requirements?
              </p>
              <img
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
      <section className={styles.contact} ref={contactFormRef}>
        <div className={styles.container}>
          <div className={styles.address}>
            <div className={`${styles.title}`}>Your Marketing Done Here</div>
            <div className={styles.flexContainer}>
              <figure className={styles.img}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Flocation%20Icon-01.svg?alt=media&token=80e5b36d-622f-478a-bcd3-998e883cd380"
                  alt="location"
                />
              </figure>
              <span>
                <p className={styles.contactText}>
                  Door No. 32-10-8 Sheelanagar
                </p>
                <p className={styles.contactText}>
                  Venkateswara colony, Street no. 8
                </p>
                <p className={styles.contactText}>KIMS Hospital Road</p>
                <p className={styles.contactText}>
                  VSKP, Andhra Pradesh, India - 530012
                </p>
              </span>
            </div>
            <div className={styles.flexContainer}>
              <figure className={styles.img}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2FMessage%20Icon-01.svg?alt=media&token=cf073b5a-7e95-4d8d-b613-e34b0750a0d0"
                  alt="email"
                />
              </figure>
              <p className={styles.contactText}>support@cliqtick.com</p>
            </div>
            <div className={styles.flexContainer}>
              <figure className={styles.img}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fcall%20Icon.svg?alt=media&token=ed40e807-ddeb-4eb4-8025-5d15e6fc2927"
                  alt="phone"
                />
              </figure>
              <span>
                <p className={styles.contactText}>Call us: Monday to Friday</p>
                <p className={styles.contactText}>9:30AM to 6:30PM</p>
                <p className={styles.contactText}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Findia-flag-round-icon-32.png?alt=media&token=4f9185ff-f2f7-4fe3-b222-d1f30a2326ec" alt="IN"/> +91 912 194 7554
                </p>
                <p className={styles.contactText}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Funited-states-of-america-flag-round-small.png?alt=media&token=6783c5ee-4e0a-4055-8758-304be342e41d" alt="USA"/> +1 716 941 4055
                </p>
                <p className={styles.contactText}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Funited-kingdom-flag-round-small.png?alt=media&token=7b7b5e84-6d0a-4764-b529-022fb95f0945" alt="UK"/> +44 755 395 9006
                </p>
              </span>
              <figure
                className={`image is-32x32 ${styles.marginR5} ${styles.marginT5} ${styles.position}`}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fwhatsapp.svg?alt=media&token=4b48cf13-7748-441b-a94f-9a70eaa0242a"
                  alt="whatsapp"
                />
              </figure>
            </div>
            <span className={styles.flexBox}>
              <a
                href="https://www.facebook.com/cliqtickmarketing"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.socialImg}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ffacebook.svg?alt=media&token=375bd23d-ab0f-41c6-a272-54b8a202a262"
                  alt="fb.com/cliqtick"
                />
              </a>
              <a
                href="https://www.instagram.com/cliqtickmarketing"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.socialImg}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Finstagram.svg?alt=media&token=51b522fe-120f-41d8-b49a-1af00b35cad6"
                  alt="instagram.com/cliqtick"
                />
              </a>
              <a
                href="https://www.twitter.com/Cliqtick"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.socialImg}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Ftwitter.svg?alt=media&token=614f9550-62ff-42f2-81f7-2c1375b5fb09"
                  alt="twitter.com/cliqtick"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cliqtick"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.socialImg}
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Flinkedin.svg?alt=media&token=dabedd04-2526-4bed-9e6b-5b415c4b1b2c"
                  alt="linkedin.com/company/cliqtick"
                />
              </a>
            </span>
          </div>
          <div className={styles.contactForm}>
            <div className={`${styles.title}`}>Contact Us</div>
            {success ? (
              <p>
                Thank you for reaching out. One of our representatine will
                contact you within 24 Hrs
              </p>
            ) : (
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                ref={formRef}
              >
                <div className={classes.flex}>
                  <TextField
                    className={classes.mr5}
                    id="fname"
                    label="First Name"
                    variant="outlined"
                    error={fnameErr.err}
                    name="fname"
                  />
                  <TextField
                    className={classes.ml5}
                    id="lname"
                    label="Last Name"
                    variant="outlined"
                    error={lnameErr.err}
                    name="lname"
                  />
                </div>
                <TextField
                  id="email"
                  label="E-Mail"
                  fullWidth={true}
                  variant="outlined"
                  error={emailErr.err}
                  name="email"
                />
                <TextField
                  id="phone"
                  label="Phone"
                  fullWidth={true}
                  variant="outlined"
                  error={phoneErr.err}
                  name="phone"
                />
                <TextField
                  id="company"
                  label="Company Name"
                  fullWidth={true}
                  variant="outlined"
                  error={companyErr.err}
                  name="company"
                />
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth={true}
                >
                  <InputLabel id="service">Service</InputLabel>
                  <Select
                    labelId="service"
                    id="demo-simple-select-outlined"
                    value={service}
                    onChange={(e) =>
                      setService((prev) => {
                        return e.target.value;
                      })
                    }
                    label="Service"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Level 1"}>Level 1</MenuItem>
                    <MenuItem value={"Level 2"}>Level 2</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Let's Chat
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
