/* eslint-disable react/prop-types */

import styles from "./Card.module.css";

const Card = ({ title, subtitle, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={img} alt="image" className={styles.icon} />
        <div className={styles.heading}>
          <span>{title}</span>
          <span>{subtitle}</span>
        </div>
      </div>
      <div className={styles.bottomText}>
        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet
      </div>
    </div>
  );
};

export default Card;
