import React from 'react'
import ComprasBMI from './components/ComprasBMI.tsx'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ComprasBMI />
      </div>
    </div>
  )
}

export default App