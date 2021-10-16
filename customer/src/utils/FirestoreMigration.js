import React, { useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../services/Firebase'
import data from './data'

function FirestoreMigration() {
  useEffect(() => {
    data.map((i) => main(i))

    async function main(item) {
      // Add a new document in collection "cities"
      try {
        await addDoc(collection(db, 'menu'), {
          ...item,
        })

        console.log('Document added...\n')
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
  }, [])

  return <div></div>
}

export default FirestoreMigration
