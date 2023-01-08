import React, { ReactNode } from "react";
import styles from './button.module.scss'

type Btn = {
    children: ReactNode
}


const Button:React.FC<Btn> = ({children}) => {
    return (
        <button className={styles.btn}>{children} </button>
    )
}

export default Button