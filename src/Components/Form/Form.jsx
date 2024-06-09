import styles from "./Form.module.css";
import logo from "../../assets/EZlogo.png";
import Card from "../Card/Card";
import presentation from "../../assets/presentation.png";
import audio_visual from "../../assets/audio_visual.png";
import dataProcessing from "../../assets/dataProcessing.png";
import graphicDesign from "../../assets/graphicDesign.png";
import reasearch from "../../assets/Research.png";
import translation from "../../assets/Translation.png";

import { useEffect, useState } from "react";
import { postEmailreq } from "../../apis/api";

const Form = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(""); // true-->success, false==>error, ""-->empty
  const [errortext, setErrorTxt] = useState("");
  const [mobileScreen, setMobileScreen] = useState(true);

  const reset = (fn, bool = true, delay = 3000, text = "") => {
    setTimeout(() => {
      fn(text);
      if (bool) setEmail("");
    }, delay);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorTxt("Email is required");
      return reset(setErrorTxt);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorTxt("Invalid email format");
      return reset(setErrorTxt, false);
    }

    const data = { email: email };
    const res = await postEmailreq(data);

    if (res.status === 200) {
      //   console.log("form submitted");
      setSuccess(true);
      reset(setSuccess);
    } else if (res.status === 422) {
      setSuccess(false);
      setErrorTxt("Emails ending with @ez.works are not allowed.");
      reset(setSuccess, false);
      reset(setErrorTxt, false);
    }
  };

  const getStyle = () => {
    if (success === true) {
      return { backgroundColor: "#16a34a" };
    } else if (success === false) {
      return { backgroundColor: "#dc2626" };
    } else {
      return { backgroundColor: "#ea7b2c" };
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMobileScreen(true);
      } else setMobileScreen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.formSection}>
        <div className={styles.logo_heading}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.heading}>
            Suite Of Business Support Services
          </div>
        </div>
        <div className={styles.logo_heading}>
          <div className={styles.textpara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </div>
          {!mobileScreen ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                //   required
              />
              <button className={styles.submitButton} style={getStyle()}>
                {success === true
                  ? "Submitted"
                  : success === false
                  ? "Invalid"
                  : "Contact Me"}
              </button>
              <div className={styles.errorMsg}>{errortext}</div>
            </form>
          ) : null}
        </div>
      </div>
      <div className={styles.serviceGrid}>
        <Card title="Presentation" subtitle="Design" img={presentation} />
        <Card title="Audio-Visual" subtitle="Production" img={audio_visual} />
        <Card title="Translation" subtitle="Service" img={translation} />
        <Card title="Graphic" subtitle="Design" img={graphicDesign} />
        <Card title="Research &" subtitle="Analytics" img={reasearch} />
        <Card title="Data" subtitle="Processing" img={dataProcessing} />
        {mobileScreen ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              //   required
            />
            <button className={styles.submitButton} style={getStyle()}>
              {success === true
                ? "Submitted"
                : success === false
                ? "Invalid"
                : "Contact Me"}
            </button>
            <div className={styles.errorMsg}>{errortext}</div>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default Form;

/* 

*/
