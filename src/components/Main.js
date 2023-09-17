import React from "react";
import restaurant from "./img/restauranfood.jpg";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <header className={styles.main}>
      <section>
        <div className={styles.text}>
          <h2>Little Lemon </h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations" className={styles.button}>Reserve a table</Link>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={restaurant} alt="food photo" />
        </div>
      </section>
    </header>
  );
};

export default Main;
