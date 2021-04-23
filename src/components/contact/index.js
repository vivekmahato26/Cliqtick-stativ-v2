import React, { useState, useRef, useContext } from "react";

import { ScrollContext } from "../context";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import styles from "./contact.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    justifyContent: 'center',
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
  contact: {
    borderRadius: "50px",
    margin: "20px auto",
    fontSize: "25px",
    fontFamily: "Futura Medium",
    backgroundColor: "#62d0f4",
    "&:hover": {
      backgroundColor: "#55c6f2",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function Contact({page}) {
  const { contactFormRef } = useContext(ScrollContext);
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const formRef = useRef();
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

  const handleSubmit = () => {
    const temp = {
      fname: formRef.current.fname.value,
      lname: formRef.current.lname.value,
      company: formRef.current.company.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      service: page,
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
      <section className={styles.contact} ref={contactFormRef}>
        <div className={styles.container}>
          <div className={styles.address}>
            <div className={`${styles.title}`}>Your Marketing Done Here</div>
            <div className={styles.flexContainer}>
              <figure className={styles.img}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FLocation%20Icon.png?alt=media&token=acf60cef-98a7-4a65-86c2-f229d8a76afa"
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
            <div className={`${styles.alignItem} ${styles.flexContainer}`}>
              <figure className={styles.img}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FMail%20Icon.png?alt=media&token=41315942-4e7d-4bef-87a3-285e9500b962"
                  alt="email"
                />
              </figure>
              <p className={styles.contactText1}>support@cliqtick.com</p>
            </div>
            <div className={styles.flexContainer}>
              <figure className={styles.img}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FPhone%20Icon.png?alt=media&token=c8413087-6f11-4a16-a142-d108ba4b2358"
                  alt="phone"
                />
              </figure>
              <span>
                <p className={styles.contactText}>Call us: Monday to Friday</p>
                <p className={styles.contactText}>9:30AM to 6:30PM</p>
              </span>
             
            </div>
            <div className={`${styles.alignItem} ${styles.flexContainer} ${styles.mobile}`}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Findia-flag-round-icon-32.png?alt=media&token=4f9185ff-f2f7-4fe3-b222-d1f30a2326ec"
                  alt="IN"
                />
              <p>+91 912 194 7554</p>
            </div>
            <div className={`${styles.alignItem} ${styles.flexContainer} ${styles.mobile}`}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Funited-kingdom-flag-round-small.png?alt=media&token=7b7b5e84-6d0a-4764-b529-022fb95f0945"
                  alt="UK"
                />
              <p>+44 755 395 9006</p>
            </div>
            <div className={`${styles.alignItem} ${styles.flexContainer} ${styles.mobile}`}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Funited-states-of-america-flag-round-small.png?alt=media&token=6783c5ee-4e0a-4055-8758-304be342e41d"
                  alt="USA"
                />
              <p>+1 716 941 4055</p>
            </div>
           
          </div>
          <span className={styles.divider}/>
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
                    error={fnameErr.err}
                    name="fname"
                  />
                  <TextField
                    className={classes.ml5}
                    id="lname"
                    label="Last Name"
                    error={lnameErr.err}
                    name="lname"
                  />
                </div>
                <TextField
                  id="email"
                  label="E-Mail"
                  fullWidth={true}
                  error={emailErr.err}
                  name="email"
                />
                <TextField
                  id="phone"
                  label="Phone"
                  fullWidth={true}
                  error={phoneErr.err}
                  name="phone"
                />
                <TextField
                  id="company"
                  label="Company Name"
                  fullWidth={true}
                  error={companyErr.err}
                  name="company"
                />
                <div className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.contact}
                >
                  Let's Chat
                </Button></div>
                <img src="https://firebasestorage.googleapis.com/v0/b/cliqtick.appspot.com/o/ststicV2%2Fsmm%2FContact%20Box%20Border%20(1).png?alt=media&token=d987bfb8-57d8-489a-aa1d-a1d64267d531" alt="" className={styles.formImg}/>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
