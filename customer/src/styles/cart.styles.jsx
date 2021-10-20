import styled from 'styled-components'
import mobile from './Responsive'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0px;
  padding: 0px;
`

export const Wrapper = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-weight: bold;
  line-height: 50px;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 80%;
`

export const TopButton = styled.button`
  border-radius: 10px;
  // opacity: 0.5;
  padding: 10px;
  margin: 15px;
  font-weight: 600;
  width: 500px;
  cursor: 'pointer';
  border: '1px solid';
  background-color: ${(props) =>
    props.t === 'filled' ? '#FA4A0C' : 'transparent'};
  color: ${(props) => props.t === 'filled' && 'white'};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${mobile({
    padding: '6px',
    fontWeight: '500',
    margin: '3px',
    fontSize: '12px',
    width: '7rem'
  })};
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin: 10px 3px 10px 3px;
  // padding: 3%;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    padding: '2%',
  })}
`


export const Product = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 3px;
  background-color: #e3e3e3;
  border-radius: 30px;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 60%;
`

export const ProductName = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ fontSize: '16px' })}
`

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: '16px' })}
`
export const Total = styled.div`
  margin: 20px 0 0 120px;
  height: 40px;
  font-size: 30px;
  color: #fa4a0c;
  ${mobile({
    // paddingLeft: '15px',
    textAlign: 'center',
    backgroundColor: 'white',
    margin: '10px 20px',
    fontSize: '20px',
    borderRadius: '30px',
  })};
`
export const TableNumber = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  color: #fa4a0c;
`

