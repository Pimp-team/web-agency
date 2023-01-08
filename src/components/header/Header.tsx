import React, { useState } from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import Modal from '../modal/Modal'
import BurgerToClose from '../UI/burger_menu/BurgerToClose'




const Header: React.FC = () => {
        const [toggle, setToggle] = useState<Boolean>(false)

        return (
                <header className={styles.header}>
                        <div className={styles.content_wrapper}>
                                <nav className={styles.navigation}>
                                               {!toggle ? <Link to='/'>Cupaste</Link> : <Link style={{opacity:'0'}} to='/'>Cupaste</Link>} 
                                        <p onClick={() => setToggle(!toggle)} className={styles.btn_menu}>menu</p>
                                        <div className={styles.icon_wrap} onClick={() => setToggle(!toggle)}>
                                                <BurgerToClose thumb={toggle} />
                                        </div>
                                        <Modal thumb={toggle} change={() => setToggle(false)} />
                                </nav>
                        </div>
                </header>
        )
}

export default Header