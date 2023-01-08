import React from "react";
import styles from './form.module.scss'

const Form = () => {
    return (
        <section>
            <form>
                    <div className={styles.group}>
                        <input type="text" required />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>Full name</label>
                    </div>

                    <div className={styles.group}>
                        <input type="text" required />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>Email</label>
                    </div>
                    <div className={styles.group}>
                        <input type="number"  required />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>Phone</label>
                    </div>
                    <div className={styles.group}>
                        <input type="text" required />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>Website (if applicable):</label>
                    </div>
                    <div className={styles.group}>
                        <textarea name="project" id="proj" cols={32} rows={10}></textarea>
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>Describe your project in as much details as possible :</label>
                    </div>
                    <div className={styles.group}>
                        <input type="text" required />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>What is your budget?:</label>
                    </div>
                    
                    <div className={styles.group}>
                        <input type="text" required />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label>How did you hear about us?</label>
                    </div>
                </form>
        </section>
    )
}

export default Form