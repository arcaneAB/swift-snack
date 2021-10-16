import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import {
  Container,
  Title,
  Wrapper,
  Top,
  TopButton,
  Product,
  Image,
  ProductName,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Total,
  Bottom,
} from '../../styles/cart.styles'
import { getCartItems } from '../../services/Localstorage'

function calculateTotal(cartItems) {
  var total = 0
  if (cartItems)
    cartItems.forEach((item) => {
      total += item.price
    })
  return total
}

const Cart = () => {
  const cart = getCartItems()
  console.log('cart 🛒', cart)
  const totalPrice = calculateTotal(cart)

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR ORDERS</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE ORDERING</TopButton>
          </Link>

          <TopButton type="filled">PLACE ORDER</TopButton>
        </Top>
        <Bottom>
          <div>
            {cart &&
              cart.map((item) => (
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
