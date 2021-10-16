import styled from 'styled-components'
import { AiFillAlert } from 'react-icons/ai'
import { CDBBadge, CDBContainer } from 'cdbreact'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from 'react-icons/io5'
import mobile from './Responsive'
import Button from 'react-bootstrap/Button'

const btn = {
  backgroundColor: '#FA4A0C',
  borderRadius:'30px',
  border: 'none',
}
const icon = {
  color: '#FA4A0C',
  border: 'none',
  fontSize: '40px',
}
const Container = styled.div`
  width: 100%;
  height: 60px;
  margin: 15px;
  ${mobile({ height: '150px', margin: '0' })};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ display: 'flex', flexDirection: 'column' })};
`

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
  ${mobile({ justifyContent: 'space-between', paddingRight: '0px' })};
`

const MenuItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 15px;
  justify-content: space-between;
  ${mobile({ fontSize: '1rem', margin: '3px', padding: '0 40px' })};
`
const Title = styled.h1`
  text-decoration: none;
  font-size: 40px;
  width: 600px;
  padding-left: 100px;
  ${mobile({ width: '80%', padding: '10px 0', textAlign: 'left' })};
`
const Register = styled.span`
  color: grey;
  position: absolute;
  width: 58px;
  height: 26px;
  left: 311px;
  top: 16px;
  bottom: 40px ${mobile({ marginRight: '0px', padding: '0' })};
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Link to="/" style={{color: '#000000',textDecoration:'none'}}>
            Swift Snack
          </Link>
        </Title>
        <Link to="#">
          <Register>Sign in</Register>
        </Link>
        <Right>
          <Link to="#">
            <MenuItem>
              <Button style={btn} >
                Call Waiter <AiFillAlert />
              </Button>
            </MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <CDBContainer>
                <IoFastFoodOutline style={icon} />
                <CDBBadge
                  style={btn}
                  size="small"
                  borderType="pill"
                >
                  {/* {props.cart.length} */}5
                </CDBBadge>
              </CDBContainer>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
