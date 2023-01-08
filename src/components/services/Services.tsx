import React from "react";
import styles from './services.module.scss'
import service from '../../assets/services.jpg'

const Services = () => {
    return (
        <article className={styles.services}>
            <div className={styles.services_content}>
                <h2>
                We make your business successful
                </h2>
                <p>
                Our services include web development, design, and branding, and we offer ongoing support to keep your website current and generating leads. Contact us today to learn more about how we can help your small business succeed online.
                </p>
            </div>
            <div className={styles.services_photo}>
            </div>
        </article>
    )
}

export default Services