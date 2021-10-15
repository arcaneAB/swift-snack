import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export function useData() {
  return useContext(DataContext)
}

function DataContext({ children }) {

    function (){
        
    }

    const value = {}
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataContext
