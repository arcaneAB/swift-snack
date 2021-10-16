import React from 'react'
import Navbar from './Navbar'
import Category from './Category'
import { AiOutlineCheckCircle } from 'react-icons/ai'
const successPage = {
  color: 'lightgreen',
  fontSize: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
const successTagline = {
  fontSize: '270px',
}
function OrderSuccess() {
  return (
    <div>
      <Navbar />
      <Category />
      <div style={successPage}>
        <h2>Order Placed Successfully</h2>
        <AiOutlineCheckCircle style={successTagline} />
      </div>
    </div>
  )
}
export default OrderSuccess
