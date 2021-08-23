export const test = () => (dispatch) => {
  dispatch({ type: "TEST" })
};

export const addToCart = (newCart) => (dispatch) => {
  dispatch({ type: 'ADD_TO_CART', newCart })
}