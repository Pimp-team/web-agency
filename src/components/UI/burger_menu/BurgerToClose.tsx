import React from 'react'
import styles from './burger_to_close.module.scss'
import { TToggle } from '../../../Types/TypeVars'


const BurgerToClose:React.FC<TToggle> = ({thumb}) => {
    return (
        <div className={thumb ? `${styles.open} ${styles.nav_icon3}` : `${styles.nav_icon3}`} >
        <span className={styles.burger}></span>
        <span className={styles.burger}></span>
        <span className={styles.burger}></span>
        <span className={styles.burger}></span>
</div>
    )
}

export default BurgerToClose