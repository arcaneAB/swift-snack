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
  font-weight: 300;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  width: 80%;
`

export const TopButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({
    padding: '6px',
    fontWeight: '500',
    margin: '3px',
    border: 'filled',
    fontSize: '12px',
  })}
`

export const Bottom = styled.div`
  width: 70%;
  display: flex;
  ${mobile({ display: 'flex', flexDirection: 'column' })}
`

export const Product = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
`
export const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
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
  border: 1px solid black;

  ${mobile({
    paddingLeft: '15px',
    backgroundColor: '#f0ee97',
    margin: '10px 20px',
    fontSize: '20px',
    border: '1px solid black',
    borderRadius: '10px',
  })}
`
export const TableNumber = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`