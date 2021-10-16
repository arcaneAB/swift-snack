import { useRef } from 'react'
import {
  Container,
  Form,
  Input,
  Search,
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  Price,
  Desc,
  Button,
  Time,
} from '../styles/menu.styles'
// import data from '../utils/data'

const Menu = ({ menu }) => {
  const inputRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    // props.search(inputRef.current.value)
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Please enter food's name"
        />
        <Search type="submit">Search</Search>
      </Form>
      {menu.map((item) => (
        <Wrapper key={item.id}>
          <Image src={item.img}></Image>
          <Content>
            <Title>
              <Subtitle>{item.title}</Subtitle>
              <Price>Rs. {item.price}</Price>
            </Title>
            <Desc>{item.desc}</Desc>
            <Time>Time: {item.prepare} mins</Time>
            <Button>Add to List</Button>
          </Content>
        </Wrapper>
      ))}
    </Container>
  )
}

export default Menu
