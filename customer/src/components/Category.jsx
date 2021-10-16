import styled from 'styled-components'
import mobile from './Responsive'

const Wrapper = styled.div`
  margin-bottom: 5px;
`
const Button = styled.button`
  background-color: #f6fcabce;
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
  :hover {
    background-color: #9afc59ce;
  }
  ${mobile({ width: '80px', height: '40px', margin: '3px' })}
`

const Category = () => {
  return (
    <Wrapper>
      {['ALL', 'SNACKS', 'MEALS', 'DESSERTS'].map((category) => (
        <Button key={category}>{category}</Button>
      ))}
    </Wrapper>
  )
}

export default Category
