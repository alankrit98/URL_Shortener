import React, { useState, useEffect } from 'react'
import axios from 'axios'
import URLList from '../components/URLList'
import Analytics from '../components/Analytics'
import { handleGenerateNewShortURL } from '../../../backend/controllers/url.js'

const Home = () => {
  const [url, setUrl] = useState('')
  const [urls, setUrls] = useState([])

  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = async () => {
    try {
      const res = await axios.get('http://localhost:8001/urls')
      setUrls(res.data)
    } catch (err) {
      console.error('Error fetching URLs:', err)
    }
  }

  const handleShorten = async () => {
    if (url.trim()) {
      try {
        const res = await axios.post('http://localhost:8001/shorten', { originalUrl: url })
        setUrls([...urls, res.data])
        setUrl('')
      } catch (err) {
        console.error('Error shortening URL:', err)
      }
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="flex-1 border rounded p-2 mr-2"
        />
        <button onClick={handleGenerateNewShortURL} className="bg-blue-500 text-white px-4 py-2 rounded">Shorten</button>
      </div>
      <URLList urls={urls} />
      <Analytics urls={urls} />
    </div>
  )
}

export default Home
