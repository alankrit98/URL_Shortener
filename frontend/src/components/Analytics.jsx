import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const Analytics = ({ urls }) => {
  const data = {
    labels: urls.map(u => u.short),
    datasets: [
      {
        label: 'Clicks',
        data: urls.map(u => u.clicks),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      }
    ]
  }

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <Bar data={data} />
    </div>
  )
}

export default Analytics
