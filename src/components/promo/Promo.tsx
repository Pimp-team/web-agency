import React from "react";
import styles from './promo.module.scss'
import hero from '../../assets/hero.webp'

const Promo = () => {
    return (
        <article className={styles.promo}>
            <div className={styles.promo_content}>
                <span>A TRUSTED DIGITAL AGENCY</span>
                <h1>Building Digital <br />
                    Products & Brands</h1>
                <p>Welcome to our web development agency! We create top-quality websites for small businesses and help them grow and succeed online. Our team specializes in web development, design, and branding. We'll work with you to achieve your online goals and make the technical stuff easy.</p>
            </div>
            <div className={styles.promo_hero}>
                <img src={hero} alt="" />
            </div>
        </article>
    )
}

export default Promo