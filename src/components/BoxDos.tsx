import React, { useEffect, useState } from 'react'
import styles from '../styles/BoxDos.module.css'
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import CircularProgress from '@mui/material/CircularProgress';
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
  fecha: string

}

interface modenassimbols { euro: string, yuan: string, lira: string, rublo: string, dolar: string }

type OnlyKeys = keyof modenassimbols;

function Moneda({ data, simbol }: Modena) {
  console.log(simbol)
  return (
    <>
      <section className={styles.sectionTable}>{simbol} - {data.moneda.toUpperCase()}</section>
      <section className={styles.sectionTable}>{data.precio} </section>
    </>

  )
}

export default function BoxDos() {
  const [coinsData, setcoinsData] = useState([] as utilitiesResponse[])
  const [date, setDate] = useState('' as String)
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const peticion = await fetch('https://bcv.utilitiesapis.ml');
      const json = await peticion.json()
      const data = json.data as response;
      const fechaActualizacion = new Date(data.fecha)
      const fechaFormat: string = fechaActualizacion.toLocaleDateString('es-ES')
      const minutes = fechaActualizacion.getMinutes() >= 10 ? fechaActualizacion.getMinutes().toLocaleString() : `0${fechaActualizacion.getMinutes().toLocaleString()}`
      const horaFormat: string = `${fechaActualizacion.getHours()}:${minutes}`
      setDate(`ultima actualización el dia: ${fechaFormat} - ${horaFormat}`)
      arreglarData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }
  }

  const arreglarData = (data: response) => {
    const arrayData: utilitiesResponse[] = []
    for (const [key, value] of Object.entries(data)) {
      if (key != 'fecha') {
        arrayData.push({
          moneda: key as string,
          precio: value.toFixed(2) as number,
        })
      }
    }
    setcoinsData(arrayData.reverse())
  }

  const simbols: modenassimbols = {
    euro: '€',
    yuan: '¥',
    lira: '₺',
    rublo: '₽',
    dolar: '$'
  }

  return (
    <div className={styles.box}>
      <section className={styles.section}>
        <div className={styles.card}>
          <h2 className={styles.title}>Tasa Referencial del Banco de Venezuela</h2>
          {loader ?
            <div className={styles.loader}>
              <CircularProgress sx={{
                color: '#00ABB3',
              }} />
            </div>
            :
            <div>
              <section>
                <div className={styles.tableHeader}>
                  <section className={styles.sectionTable}>Moneda</section>
                  <section className={styles.sectionTable}>Precio</section>
                </div>
                {coinsData.map((res) => <div className={styles.table} key={res.moneda}>
                  <Moneda data={res} simbol={simbols[res.moneda as keyof modenassimbols]} />
                </div>)}
              </section>
              <div className={styles.info}>
                <Tooltip title={date}>
                  <InfoIcon />
                </Tooltip>
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  )
}
