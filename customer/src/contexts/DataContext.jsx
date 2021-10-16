import React, { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function temp() {
    return loading
  }

  useEffect(() => {
    return
  }, [])

  const value = { temp }

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  )
}
