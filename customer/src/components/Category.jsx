import { Button, Wrapper } from '../styles/category.styles'

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
