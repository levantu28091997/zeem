import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

type DescriptionProp = {
    fileName?:string
}

export default function DescriptionComponent({fileName}:DescriptionProp) {
    return (<div className={styles.description}>
        <p>
        FileLocal&nbsp;
            <code className={styles.code}>{fileName ? 'pages/'+fileName+'.tsx' : ''}</code>
        </p>
        <div>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
  By{' '}
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </a>
        </div>
    </div>)
}