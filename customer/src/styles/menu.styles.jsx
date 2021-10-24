import styled from 'styled-components'
import mobile from './Responsive'

export const Container = styled.div`
  padding-top: 10px;
  width: 99%;
  display: flex;
  flex-wrap: wrap;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  margin: 10px 3px 10px 3px;
  padding: 3%;
  ${mobile({ width: '90%', padding: '2%' })};
`
export const Image = styled.img`
  width: 150px;
  height: 180px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10%;
  ${mobile({ width: '100px', height: '150px' })};
`
export const Content = styled.div`
  position: relative;
  padding-left: 10px;
`
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  color: #fa4a0c;
`
export const Subtitle = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: bold;
  color: black;
`
export const Price = styled.p``
export const Desc = styled.div`
  padding-top: 0px;
`

export const Form = styled.form`
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`
export const Input = styled.input`
  height: 50px;
  width: 644px;
  border-radius: 30px;
  font-size: 26px;
  padding: 2px;
  border-color: #efeeee;
  ${mobile({ height: '40px', width: '65%', fontSize: '18px' })};
  :hover {
    background: rgba(100, 100, 100, 0.08);
  }
`
export const Search = styled.button`
  background-color: #fa4a0c;
  color: white;
  height: 50px;
  width: 138px;
  border-radius: 30px;
  border: none;
  margin-left: 10px;
  cursor: pointer;

  ${mobile({ height: '40px', width: '20%', fontSize: '14px' })};
`
export const Button = styled.button`
  position: relative;
  // top: 145px;
  left: 125px;
  background-color: #fa4a0c;
  color: white;
  border-radius: 30px;
  border: none;
  height: 26px;
  cursor: pointer;
  padding: 2px 10px;
`
export const Time = styled.div`
  color: grey;
`
