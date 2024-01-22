import React, { useState } from 'react';
import styles from '../styles/Testimonials.module.css';


import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import CardScroller from './CardScroller';


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

        <CardScroller />

    </main>
  )
}

export default Testimonials