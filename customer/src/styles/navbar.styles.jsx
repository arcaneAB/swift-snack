import styled from 'styled-components'
import mobile from './Responsive'

export const btn = {
  backgroundColor: '#FA4A0C',
  borderRadius: '30px',
  top: '30px',
  border: 'none',
  fontSize: '20px',
  color: 'white',
  padding: '8px',
  // height: '60px'
  display: 'flex',
  textDecoration: 'underline',
  // textDecorationColor: '#FA4A0C',
  // textDecorationThickness: '0.0000001px',
}
export const icon = {
  color: '#FA4A0C',
  border: 'none',
  fontSize: '40px',
}
export const Container = styled.div`
  position: fixed;
  top: 0px;
  border-radius: 0 0 24px 24px;
  background-color: #c8c8c8;
  z-index: 3;
  width: 100%;
  height: 15%;
  margin: 0px;
  ${mobile({ height: '150px', margin: '0' })};
`

export const Wrapper = styled.div`
  // position: fixed;
  // top: 0px;
  // border-radius: 0 0 24px 24px;
  // background-color: #c8c8c8;
  // z-index: 3;
  display: flex;
  align-items: center;
  ${mobile({ display: 'flex', flexDirection: 'column' })};
`

export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  ${mobile({ justifyContent: 'space-between', paddingRight: '20px', paddingLeft:'0px' })};
`

export const MenuItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 15px;
  justify-content: space-between;
  ${mobile({ fontSize: '1rem', margin: '3px 0', padding: '0 50px 0 50px' })};
`
export const Title = styled.h1`
  text-decoration: none;
  font-size: 40px;
  width: 600px;
  padding-left: 100px;
  ${mobile({ width: '80%', padding: '10px 0', textAlign: 'left' })};
`
export const Register = styled.span`
  color: grey;
  position: absolute;
  left: 95%;
  top: 20%;


    ${mobile({
      marginRight: '0px',
      padding: '0',
      width: '85px',
      height: '26px',
      left: '320px',
      top: '18px',
      bottom: '40px'
    })};
`
