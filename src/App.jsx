import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Searchbar from './components/searchbar'
import Table from './components/table'
import { fetchCoinsData } from './api'

function App() {
  const [searchText, setSearchText] = useState('')
  const [coinsData, setCoinsData] = useState([])
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    try {
      setLoading(true)
      const result = await fetchCoinsData()
      setCoinsData(result?.data)
      setLoading(false)
    }
    catch (error) {
      console.error("Failed to load:", error);
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(loadData, 6000)
    return () => clearInterval(interval)
  }, [])

  const filteredData = coinsData?.filter((coin) =>
    coin?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  )

  return (
    <>
      <div className='app-container'>
        <Header />
        <div style={{ textAlign: "right", color: "#6b7280", fontSize: 13 }}>
          {loading ? "Updating..." : `Updated — ${new Date().toLocaleTimeString()}`}
        </div>
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
        <Table data={filteredData} />
      </div>
    </>
  )
}

export default App