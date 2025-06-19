import React from 'react'

const URLList = ({ urls }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Shortened URLs</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Original URL</th>
            <th className="border px-4 py-2">Short URL</th>
            <th className="border px-4 py-2">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((u) => (
            <tr key={u.id}>
              <td className="border px-4 py-2">{u.original}</td>
              <td className="border px-4 py-2">{u.short}</td>
              <td className="border px-4 py-2">{u.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default URLList
