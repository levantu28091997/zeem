import React, { ReactNode } from 'react'
import styles from '../styles/Home.module.css'


type GridProp = {
    children?: ReactNode
}

export default function MainCenterComponent({children}:GridProp) {
    return (<div className={styles.center}>
        {children}
    </div>
    )
}