import React, { Key, useEffect, useState } from 'react'
import styles from '../styles/BoxUno.module.css'
import Slide from '@mui/material/Slide';

interface Modena {
  data: utilitiesResponse
  simbol: String,
}
interface utilitiesResponse {
  moneda: string,
  precio: number
}

interface response {

  euro: Number,
  yuan: Number,
  lira: Number,
  rublo: Number,
  dolar: Number,
  fecha: String

}




export default function BoxUno() {

  return (
    <div className={styles.box}>
        <section className={styles.section}>
          <h1 className={styles.title}> Utilities coin</h1>
          <p>Utilities coin es un pequeño proyecto que almacena el registro de la tasa de cambio referencial del Banco Central de Venezuela desde enero del 2020 hasta la fecha actual.</p>
          <p>El objetivo es almacenar todos los cambios de las tasas para así realizar futuros análisis.</p>
          <p>Esta es la primera version de la api y actualmente se encuentra en desarrollo.</p>
          <p>Este endpoint es de libre consumo para pequeños proyectos</p>
          <code className={styles.code}>
            API: bcv.utilitiesapis.ml
          </code>
        </section>

    </div>
  )
}

