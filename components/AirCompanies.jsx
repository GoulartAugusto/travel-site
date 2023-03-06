import React from 'react';
import styles from '../styles/AirCompanies.module.css';

import Image from 'next/image';
import Link from 'next/link';

import Qatar from '../public/images/qatar.png';
import Latam from '../public/images/latam.png';
import Expedia from '../public/images/expedia.png';
import Qantas from '../public/images/qantas.png';
import Alitalia from '../public/images/alitalia.png';


const AirCompanies = () => {
  return (
    <main className={styles.content}>
        <Link href="https://google.com" target="_blank">
            <Image src={Qatar} className={styles.companyLogo} />
        </Link>

        <Link href="https://google.com" target="_blank">
            <Image src={Latam} className={styles.companyLogo} />
        </Link>
        <Link href="https://google.com" target="_blank">
            <Image src={Expedia} className={styles.companyLogo} />
        </Link>
        <Link href="https://google.com" target="_blank">
            <Image src={Qantas} className={styles.companyLogo} />
        </Link>
        <Link href="https://google.com" target="_blank">
            <Image src={Alitalia} className={styles.companyLogo} />
        </Link>

    </main>
  )
}

export default AirCompanies