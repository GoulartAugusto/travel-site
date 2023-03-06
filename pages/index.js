import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TopDestinations from '../components/TopDestinations'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'
import AirCompanies from '../components/AirCompanies'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Free World</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <TopDestinations />
      <Steps />
      <Testimonials />
      <AirCompanies />
    </>
  )
}
