import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import ManualHeader from '../components/ManualHeader'
import Header from "../components/Header"
import LotteryEntrance from '../components/LotteryEntrance'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Smart Contract Lottery</title>
        <meta name="description" content="Ugwumsi's Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      Hi! Welcome to My Smart Contract Lottery
      <LotteryEntrance/>
    </div>
  )
}
