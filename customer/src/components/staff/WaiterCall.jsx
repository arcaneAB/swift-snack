import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../services/Firebase'
import { collection, getDocs } from 'firebase/firestore'
import { AiOutlineAlert, AiOutlineCheckSquare } from 'react-icons/ai'

const brandHead = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '5%',
}
const orderHead = {
  color: '#FA4A0C',
  margin: '5%',
}
const listOut = {
  listStyle: 'none',
  margin: '0 3%',
}

const timeLine = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 2% 6%',
  fontWeight: 'bold',
}
const listHead = {
  color: '#FA4A0C',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '2%',
  fontWeight: 'bold',
}
function WaiterCall() {
  const [calls,setCalls] = useState([])
  useEffect(() => {
    async function main() {
      const querySnapshot = await getDocs(collection(db, 'calls'))

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data())
        setCalls((calls) => [...calls, doc.data()])
      })
    }

    main()
  }, [])
  function convertTime(fullTime){
    console.log(Date(fullTime * 1000))
    const time = Date(fullTime).toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    return time;
  }
  return (
    <div>
      <h1 style={brandHead}>
        Swift Snack{' '}
        <Link to="/orders" style={{ textDecoration: 'none', color: '#FA4A0C' }}>
          <AiOutlineAlert />
        </Link>
      </h1>

      <h2 style={orderHead}>Call of Service</h2>
      {calls.map((call) => (
        <div>
          <ul style={listOut}>
            <li>
              <div style={listHead}>
                Table: {call.table}
                <AiOutlineCheckSquare />
              </div>

              <div style={timeLine}>
                <span>Time:</span>
                <span>{convertTime(call.timestamp)}</span>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
export default WaiterCall
