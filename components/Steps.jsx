import React from 'react';
import styles from '../styles/Steps.module.css';

import Image from 'next/image';

import { GrMapLocation } from 'react-icons/gr';
import { TbBeach } from 'react-icons/tb';
import { IoCarSportOutline } from 'react-icons/io';

const Steps = () => {
  return (
    <main className={styles.content}>
        <section className={styles.text}>
            <h4>Easy and Fast</h4>
            <h2>Book your next trip in 3 easy steps</h2>
            <div className={styles.items}>
                <div className={styles.item}>
                    <button><GrMapLocation /></button>
                    <h5>Choose Destination</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, harum. Aperiam.</p>
                </div>
                <div className={styles.item}>
                    <button><TbBeach /></button>
                    <h5>Make Payment</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, harum. Aperiam.</p>
                </div>
                <div className={styles.item}>
                    <button><IoCarSportOutline /></button>
                    <h5>Reach Airport on Selected Date</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, harum. Aperiam.</p>
                </div>
            </div>
        </section>
        <section>
            <Image src='' />
        </section>
    </main>
  )
}

export default Steps