import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import BoxUno from '@/components/BoxUno'
import BoxDos from '@/components/BoxDos'
import Fade from '@mui/material/Fade';
export default function Home() {

  return (
    <>
      <Head>
        <title>Utilities Coin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.container}>
            <BoxUno />
            <BoxDos />
          </div>

          <footer className={styles.footer}>
            <p>version: 0.0.2</p>
            <p>Creado por <a href="https://github.com/Cue2g">@Cue2g</a>- Todos los derechos reservados</p>
          </footer>
        </main>
    </>
  )
}
