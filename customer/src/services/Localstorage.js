export function getCartItems() {
  const cartItems = localStorage.getItem('cart')
  return JSON.parse(cartItems) || []
}

export function clearCart() {
  const cartItems = localStorage.getItem('cart')
  cartItems && localStorage.removeItem('cart')
}

export function addCartItem(item) {
  var cartItems = localStorage.getItem('cart') || []
  cartItems = JSON.parse(cartItems)
  localStorage.setItem('cart', [...cartItems, item])
}

export function removeCartItem(item) {
  var cartItems = localStorage.getItem('cart')
  cartItems = JSON.parse(cartItems)
  localStorage.setItem(
    'cart',
    cartItems.filter((cartItem) => cartItem.id !== item.id)
  )
}
