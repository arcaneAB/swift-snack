export function getCartItems() {
  const cartItems = localStorage.getItem('cart') || undefined
  if (cartItems) return JSON.parse(cartItems)
  else return undefined
}

export function clearCart() {
  if (localStorage.getItem('cart')) localStorage.removeItem('cart')
}

export function addCartItem(item) {
  // console.log(item)
  var cartItems = localStorage.getItem('cart') || []

  if (cartItems.length) {
    cartItems = JSON.parse(cartItems)
    localStorage.setItem('cart', JSON.stringify([...cartItems, item]))
  } else localStorage.setItem('cart', JSON.stringify([item]))
}

export function removeCartItem(item) {
  var cartItems = localStorage.getItem('cart')
  cartItems = JSON.parse(cartItems)
  localStorage.setItem(
    'cart',
    cartItems.filter((cartItem) => cartItem.id !== item.id)
  )
}
