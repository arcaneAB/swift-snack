import styled from 'styled-components'
import mobile from './Responsive'

export const Wrapper = styled.div`
padding-top:170px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  border: none;
  border-radius: 40%;
  width: 45px;
  height: 20px;
  left: 47px;
  top: 151px;
  font-family: Actor;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  color: #fa4a0c;
  background-color: white;
  ${mobile({ width: '80px', height: '40px', margin: '3px' })}
`
