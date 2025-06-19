import React, { useState } from 'react'
import URLList from '../components/URLList'
import Analytics from '../components/Analytics'

const Home = () => {
  const [url, setUrl] = useState('')
  const [urls, setUrls] = useState([
    { id: 1, original: 'https://example.com/1', short: 'abc123', clicks: 45 },
    { id: 2, original: 'https://example.com/2', short: 'xyz789', clicks: 12 },
  ])

  const handleShorten = () => {
    if (url.trim()) {
      const newUrl = {
        id: urls.length + 1,
        original: url,
        short: Math.random().toString(36).substr(2, 6),
        clicks: Math.floor(Math.random() * 100),
      }
      setUrls([newUrl, ...urls])
      setUrl('')
    }
  }

  return (
    <div>
      <div className="flex gap-2 mb-4 justify-center">
        <input
          type="text"
          placeholder="Enter a URL to shorten"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 rounded w-96"
        />
        <button onClick={handleShorten} className="bg-blue-500 text-white px-4 py-2 rounded">
          Shorten
        </button>
      </div>
      <URLList urls={urls} />
      <Analytics urls={urls} />
    </div>
  )
}

export default Home
