import React from 'react'
import { TToggle } from '../../Types/TypeVars'
import styles from './modal.module.scss'
import {Link} from 'react-router-dom'

const Modal:React.FC<TToggle> = ({thumb, change}) => {
    return (
        <>
            <div className={thumb ? `${styles.dropdown_menu}`: `${styles.dropdown_menu_close}`}>
                <ul>
                    <li>menu</li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/case_syudies'>Case Studies</Link></li>
                    <li><Link to='/contuct_us'>Contact us</Link></li>
                </ul>
            </div>
            <div  className={thumb ? styles.back : styles.back_close} onClick={change}>
                {thumb ?<Link to='/'>Cupaste</Link> :<Link style={{opacity:'0'}} to='/'>Cupaste</Link>}
            </div>
        </>

    )
}

export default Modal