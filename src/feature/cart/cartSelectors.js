export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
