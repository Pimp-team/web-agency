import React from 'react'
import styles from './contactus.module.scss'
import Form from '../UI/form/Form'
import Button from '../UI/button/Button'

const ContactUs = () => {
    return (
        <article className={styles.contact_us}>
            <div className={styles.contact_us_form}>
                <Form />
                <Button>Submit</Button>
            </div>
            <div className={styles.contact_us_content}>
                <h2>
                    contact us today!
                </h2>
                <p>
                    Our simple process makes it easy to get the website you need without the headache of technical jargon!
                </p>
            </div>
        </article>
    )
}

export default ContactUs