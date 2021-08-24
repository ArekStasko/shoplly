export const test = () => (dispatch) => {
  dispatch({ type: "TEST" })
};

export const EditCart = (newCart) => (dispatch) => {
  dispatch({ type: 'ADD_TO_CART', newCart })
}