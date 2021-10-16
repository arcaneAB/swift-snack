import styled from 'styled-components'
import mobile from './Responsive'

const Wrapper = styled.div`
  margin-bottom: 5px;
`
const Button = styled.button`
  border: none;
  border-radius:40%
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
  backgound-color: white;
  ${mobile({ width: '80px', height: '40px', margin: '3px' })}
`

const Category = () => {
  return (
    <Wrapper>
      {['All', 'Snacks', 'Meals', 'Desserts'].map((category) => (
        <Button key={category}>{category}</Button>
      ))}
    </Wrapper>
  )
}

export default Category
