import React from "react";
import styles from "../styles/Card.module.css";
const Card = (props) => {
  return (
    <section className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={props.img} alt="img" />
      </div>
      <div className={styles.text_container}>
        <div className={styles.card_text_title}>
          <h3>{props.title}</h3>
          <h3 className={styles.price_tag}>{props.price}</h3>
        </div>
        <div className={styles.ptext}>
        <p>{props.discribtion} </p>
        <h4>{props.order}</h4>
        </div>
      </div>
    </section>
  );
};

export default Card;
