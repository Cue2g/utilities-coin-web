import React, { useEffect, useState } from 'react'
import styles from '../styles/BoxDos.module.css'
import Chart from 'chart.js/auto';


export default function BoxDos() {

  const [chartData, setChartData] = useState() as any;

  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ]; 

  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96],
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
        ],
        borderWidth: 1,
      }
    ]
  }

  useEffect(() => {
    
    setChartData({
      labels: Data.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained ",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    })
    console.log(chartData)
  }, [])

  return (
    <div className={styles.box}>
      <div className={styles.card}>
      </div>
    </div>
  )
}
