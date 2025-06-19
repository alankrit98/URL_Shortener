import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 URL Shortener Dashboard</h1>
      <Home />
    </div>
  )
}

export default App
