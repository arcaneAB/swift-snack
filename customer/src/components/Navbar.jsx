import { AiFillAlert } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from 'react-icons/io5'
import Button from 'react-bootstrap/Button'
import {
  Container,
  Wrapper,
  Title,
  Register,
  Right,
  MenuItem,
  icon,
  btn,
} from '../styles/navbar.styles'

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Link to="/" style={{ color: '#000000', textDecoration: 'none' }}>
            Swift Snack
          </Link>
        </Title>
        <Link to="#">
          <Register>Sign in</Register>
        </Link>
        <Right>
          <Link to="#">
            <MenuItem>
              <Button style={btn}>
                Call Waiter <AiFillAlert />
              </Button>
            </MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <IoFastFoodOutline style={icon} />
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
