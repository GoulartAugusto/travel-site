import React from 'react';
import styles from '../styles/Testimonials.module.css';

import Image from 'next/image';
import User from '../public/images/user-img.jpg';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'


const Testimonials = () => {
  return (
    <main className={styles.content}>
        <section className={styles.title}>
            <h4>Testimonials</h4>
            
            <h1>What people say about Us.</h1>

            <section className={styles.changeBtn}>
                <button type='submit'></button>
                <button type='submit'></button>
                <button type='submit'></button>
            </section>
        </section>

        <section className={styles.card} id='myCard'>
            <div className={styles.userImg}>
                <Image src={User} width={80} height={80} />
            </div>
            <div className={styles.userOpinion}>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad tempora ducimus molestiae eos quos."</p>
            </div>
            <div className={styles.userName}>
                <h4>Augusto Goulart</h4>
                <p>CEO of ARS Corp.</p>
            </div>

        </section>

        <section className={styles.toggleBtn}>
            <button><AiOutlineArrowUp /></button>
            <button><AiOutlineArrowDown /></button>
        </section>


    </main>
  )
}

export default Testimonials