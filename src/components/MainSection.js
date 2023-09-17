import React from "react";
import Card from "./Card";
import { Link } from 'react-router-dom';
import styles from "../styles/MainSection.module.css"
import salad from "./img/greek salad.jpg";
import lemon_dessert from "./img/lemon dessert.jpg";
import bruschetta from "./img/bruchetta.svg";
import pages from "./pages";
const MainSection = ()=>{

    const card_data =[{
        id:"e1",
        img:salad,
        title:"Greek salad",
        price:"$12.99",
        discribtion:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        order:"Order a delivery",
    },
    {
        id:"e2",
        img:bruschetta,
        title:"Bruchetta",
        price:"$5.99",
        discribtion:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        order:"Order a delivery",
    },
    {
        id:"e3",
        img:lemon_dessert,
        title:"Lemon Dessert",
        price:"$5.00",
        discribtion:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        order:"Order a delivery",
    }
    ];
    return (
        <section className={styles.container}>
            <div className={styles.title}>
            <h1>This weeks specials!</h1>
            <Link className={styles.btn} to={pages.get('orderOnline').path}>Online Menu </Link>
            </div>
            <div className={styles.Cards}>
            {card_data.map((data)=>
                <Card key={data.id} img={data.img} title={data.title} price={data.price}
                discribtion={data.discribtion} order={data.order} />
            )}

        </div>
        </section>
    )
};

export default MainSection ;