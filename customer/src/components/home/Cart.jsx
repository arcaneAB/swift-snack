import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import {
  Container,
  Title,
  Wrapper,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Product,
  Image,
  ProductName,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Total,
  Bottom,
} from '../styles/cart.styles'
import { getCartItems } from '../../services/Localstorage'

function calculateTotal(cartItems) {
  var total = 0
  cartItems.forEach((item) => {
    total += item.price
  })
  return total
}

const cart = getCartItems()
const totalPrice = calculateTotal(cart)

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR ORDERS</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE ORDERING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Total items({cart.length})</TopText>
            {/* <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          <TopButton type="filled">PLACE ORDER</TopButton>
        </Top>
        <Bottom>
          <div>
            {cart.map((item) => (
              <Product key={item.key}>
                <Image alt={item.title} src={item.img} />
                <ProductName>
                  <span>
                    <b>Name:</b> {item.title}
                  </span>
                  <ProductAmountContainer>
                    <AiOutlineMinus />
                    <ProductAmount>1</ProductAmount>
                    <AiOutlinePlus />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {'Rs. '}
                    {item.price}
                  </ProductPrice>
                </ProductName>
              </Product>
            ))}
          </div>
          <Total>
            <b>Total Price:</b>
            <span>
              Rs.
              {totalPrice}
            </span>
          </Total>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart
