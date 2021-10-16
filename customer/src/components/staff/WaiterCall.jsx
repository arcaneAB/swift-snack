import React from 'react'
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
  return (
    <div>
      <h1 style={brandHead}>
        Swift Snack <AiOutlineAlert />
      </h1>

      <h2 style={orderHead}>Call of Service</h2>
      <ul style={listOut}>
        <li>
          <div style={listHead}>
            Table: 7
            <AiOutlineCheckSquare />
          </div>

          <div style={timeLine}>
            <span>Time:</span>
            <span>2:21 PM</span>
          </div>
        </li>
        <li>
          <div style={listHead}>
            Table: 7
            <AiOutlineCheckSquare />
          </div>

          <div style={timeLine}>
            <span>Time:</span>
            <span>2:21 PM</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default WaiterCall
