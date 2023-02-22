import React from 'react';
import styles from '../styles/Steps.module.css';

import Image from 'next/image';
import Rome from '../public/images/destinations-rome.jpg';

import { TbMapSearch } from 'react-icons/tb';
import { TbBeach } from 'react-icons/tb';
import { FaCar } from 'react-icons/fa';

import LeafIcon from '../public/images/leaf-icon.png';
import MapIcon from '../public/images/map-icon.png';
import ShareIcon from '../public/images/share-icon.png';

import MachuPicchu from '../public/images/machu-picchu.jpg';

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

            <h3>Trip to Rome</h3>

            <p>1 - 22 August</p>

            <div className={styles.buttons}>
                <button>
                    <Image src={LeafIcon} width={30} height={30} />
                </button>
                <button>
                    <Image src={MapIcon} width={30} height={30} />
                </button>
                <button>
                    <Image src={ShareIcon} width={30} height={30} />
                </button>
            </div>

            <div>
                <p>42 people going</p>
            </div>

            <section className={styles.littleCard}>
                <div>
                    <Image src={MachuPicchu} width={100} />
                    <p>Ongoing</p>
                    <h4>Trip to Machu Picchu</h4>
                

                    <h5><b style={{color:'#4200ac'}}>50%</b> Completed</h5>
                    
                    <div className={styles.progress}>
                        <div className={styles.progressBar}></div>
                    </div>
                </div>
            </section>
        </section>


    </main>
  )
}

export default Steps