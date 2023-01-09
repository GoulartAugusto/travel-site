import React from 'react';
import styles from '../styles/Services.module.css';

import Image from 'next/image';

import Weather from '../public/images/weather-icon.png';
import Flights from '../public/images/flights-icon.png';
import Events from '../public/images/events-icon.png';
import Customized from '../public/images/customized-icon.png';


const Services = () => {
  return (
    <main className={styles.container}>
        <section className={styles.title}>
            <h4>Services</h4>
            <h2>We Offer the Best Services</h2>
        </section>

        <section className={styles.cards}>

            <div className={styles.card}>
                <Image src={Weather} width={120} />
                <h3>Calculated Weather</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>

            <div className={styles.card}>
                <Image src={Flights} width={120} />
                <h3>Best Flights</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>

            <div className={styles.card}>
                <Image src={Events} width={120} />
                <h3>Local Events</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>

            <div className={styles.card}>
                <Image src={Customized} width={120} />
                <h3>Customized Experience</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
        </section>
    </main>
  )
}

export default Services