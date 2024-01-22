import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Footer.module.css';

import { BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import Logo from '../public/images/logo.png';

const Footer = () => {
  return (
    <main className={styles.footer}>
        <section className={styles.footerTop}>
            <h2>Subscribe to get information, latest news and other interesting offers about Free World</h2>
            <div>
                <input type='email' className={styles.footerInput} placeholder='Your email' />
                <button className={styles.primaryBtn}>Subscribe</button>
            </div>
            <p className={styles.footerPrivacy}>By subscribing you agree to our <a href='#'>Privacy Policy</a></p>
            <div className={styles.footerSocials}>
                <BsInstagram /> <FaFacebookF /> <BsPinterest /> <BsTwitter /> <BsYoutube />
            </div>
        </section>

        <section className={styles.footerBottom}>
            <div className={styles.footerLists}>
                <ul className={styles.logoList}>
                    <li><Link href="#"><Image alt="Page Logo" src={Logo} height={80} /></Link></li>
                    <li><small>Book your trip in minute, get full Control for much longer.</small></li>
                </ul>
                <ul className={styles.firstList}>
                    <li><h4>Company</h4></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Mobile</a></li>
                </ul>
                <ul className={styles.secondList}>
                    <li><h4>Contact</h4></li>
                    <li><a href='#'>Help/FAQ</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Affiliates</a></li>
                </ul>
                <ul className={styles.thirtList}>
                    <li><h4>More</h4></li>
                    <li><a href='#'>Airlines fees</a></li>
                    <li><a href='#'>Airline</a></li>
                    <li><a href='#'>Low fare tips</a></li>
                </ul>
            </div>

            <p className={styles.footerRights}>All rights reserved &copy; <a href='https://goulartportifolio.web.app/' target='_blank'>Augusto Goulart</a></p>
      </section>
    </main>
  )
}

export default Footer