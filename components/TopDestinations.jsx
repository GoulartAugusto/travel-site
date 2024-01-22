import React from 'react';
import styles from '../styles/TopDestinations.module.css';

import { motion } from 'framer-motion';

import { IoIosSend } from 'react-icons/io';

import Image from 'next/image';

import Rome from '../public/images/destinations-rome.jpg';
import London from '../public/images/destinations-london.jpg';
import Europe from '../public/images/destinations-europe.jpg';

const TopDestinations = () => {
  return (
    <main className={styles.container}>
        <section className={styles.title}>
            <h4>Top Selling</h4>
            <h2>Top Destinations</h2>
        </section>
        
        <section className={styles.cards}>

            <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
                <Image alt="Rome" src={Rome} width={220} height={300} className={styles.ImgSizing} />
                <div className={styles.firstline}>
                    <p className={styles.destination}>Rome, Italy</p>
                    <p className={styles.price}>$7.369</p>
                </div>
                <p className={styles.duration}><IoIosSend /> 15 days Trip</p>
            </motion.div>

            <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
                <Image alt="London" src={London} width={220} height={300} className={styles.ImgSizing} />
                <div className={styles.firstline}>
                    <p className={styles.destination}>London, UK</p>
                    <p className={styles.price}>$4.963</p>
                </div>
                <p className={styles.duration}><IoIosSend /> 10 days Trip</p>
            </motion.div>

            <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
                <Image alt="Europe" src={Europe} width={220} height={300} className={styles.ImgSizing} />
                <div className={styles.firstline}>
                    <p className={styles.destination}>Full Europe</p>
                    <p className={styles.price}>$18.000</p>
                </div>
                <p className={styles.duration}><IoIosSend /> 31 days Trip</p>
            </motion.div>

        </section>
    </main>
  )
}

export default TopDestinations