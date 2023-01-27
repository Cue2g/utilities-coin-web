import React from 'react'
import styles from '../styles/BoxUno.module.css'

interface Modena {
  data: utilitiesResponse
  simbol: String
}
interface utilitiesResponse {
  moneda: String,
  precio: number
}

function Moneda({ data, simbol }: Modena) {
  return (
    <>
      <div className={styles.table}>
        <section className={styles.sectionTable}>{data.moneda}</section>
        <section className={styles.sectionTable}>{data.precio} {simbol}</section>
      </div>
    </>
  )
}


export default function () {

  const array: Array<utilitiesResponse> = [
    {
      "moneda": 'USD',
      'precio': 20000
    },
    {
      "moneda": 'YUAN',
      'precio': 3000
    },
    {
      "moneda": 'EURO',
      'precio': 5000
    }

  ]




  return (
    <div className={styles.box}>
      
      <section className={styles.section}>
        <h1 className={styles.title}> Utilities coin</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem, recusandae tenetur placeat corrupti tempore ut ex commodi alias officiis temporibus iste, rerum necessitatibus. Corporis laboriosam incidunt nobis ullam quo.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.tableHeader}>
          <section className={styles.sectionTable}>Moneda</section>
          <section className={styles.sectionTable}>Precio</section>
        </div>

        {array.map(res => <Moneda data={res} simbol='$' />)}
      </section>

    </div>
  )
}
