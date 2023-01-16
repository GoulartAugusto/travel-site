import React from 'react';
import styles from '../styles/Steps.module.css';

import Image from 'next/image';
import  Rome from '../public/images/destinations-rome.jpg';

import { TbMapSearch } from 'react-icons/tb';
import { TbBeach } from 'react-icons/tb';
import { FaCar } from 'react-icons/fa';

const Steps = () => {
  return (
    <main className={styles.content}>
        <section className={styles.text}>
            <h4>Easy and Fast</h4>
            <h2>Book your next trip in 3 easy steps</h2>
            <div className={styles.items}>
                <div className={styles.item}>
                    <button style={{backgroundColor: 'goldenrod', color: '#fff'}}><TbMapSearch /></button>
                    <div>
                        <h5>Choose Destination</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, harum. Aperiam.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <button style={{backgroundColor: 'orangered'}}><TbBeach /></button>
                    <div>
                        <h5>Make Payment</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, harum. Aperiam.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <button style={{backgroundColor: 'rgb(4, 0, 255)'}}><FaCar /></button>
                    <div>
                        <h5>Reach Airport on Selected Date</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, harum. Aperiam.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.card}>
            <Image src={Rome} width={320} />
        </section>
    </main>
  )
}

export default Steps