import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import withAuth from "@/_context/withAuth";

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <main></main>
    </>
  )
}

export default withAuth(Home)
