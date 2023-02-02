import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HeroSection from './components/hero-section'
import SecondSection from './components/second-section'
import ThirdSection from './components/third-section'
import FourthSection from './components/fourth-section'
import FifthSection from './components/fifth-section'




export default function Home() {

  return (
    <>
    <HeroSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>


    </>
  )

}
