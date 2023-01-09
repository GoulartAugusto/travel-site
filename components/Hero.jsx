import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Hero.module.css';
import HeroImg from '../public/images/hero-img.png';
import { AiFillPlayCircle } from 'react-icons/ai'

const Hero = () => {
  return (
    <main className={styles.container}>
        <div className={styles.grid}>
            <h4>THE BEST DESTINATIONS AROUND THE WORLD</h4>
            <h1>Travel, live and enjoy life in new places</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime laboriosam accusamus eos.</p>
            <div  className={styles.buttons}>
                <button className={styles.primaryBtn}>Discover more</button>
                <span><button className={styles.playBtn}><AiFillPlayCircle /></button><Link href='/' style={{ marginLeft: '3.5rem' }}>Play Demo</Link></span>
            </div>
        </div>
        <Image src={HeroImg} alt='' className={styles.ImgSize} />
    </main>
  )
}

export default Hero