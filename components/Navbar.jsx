import React from 'react';
import styles from '../styles/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.png';


const Navbar = () => {
  return (
    <header className={styles.container}>
        <div>
            <Link href='/'>
                <Image src={Logo} alt='Free World' height={70} style={{ marginLeft: '2rem'}} />
            </Link>
        </div>
        <div className={styles.Links}>
            <Link href='/' style={{ cursor: 'pointer' }} className={styles.Item}>Destinations</Link>
            <Link href='/' style={{ cursor: 'pointer' }} className={styles.Item}>Hotels</Link>
            <Link href='/' style={{ cursor: 'pointer' }} className={styles.Item}>Flights</Link>
            <Link href='/' style={{ cursor: 'pointer' }} className={styles.Item}>Bookings</Link>
            <Link href='/' style={{ cursor: 'pointer' }} className={styles.Item}>Login</Link>
        </div>
        <div className={styles.Actions}>
            <div>
                <button className={styles.BtnHeader} style={{ cursor: 'pointer'}}>Sign Up</button>
                <select className={styles.SelectLanguage} style={{ cursor: 'pointer'}}>
                    <option>EN</option>
                    <option>PT</option>
                    <option>SPA</option>
                </select>
            </div>
        </div>
    </header>
  )
}

export default Navbar