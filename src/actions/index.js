export const test = () => (dispatch) => {
  dispatch({ type: "TEST" })
};

export const authenticate = (username, password) => (dispatch) => {
    dispatch({ type: 'AUTHENTICATE', data: { username, password } })       
}

export const EditCart = (newCart) => (dispatch) => {
  dispatch({ type: 'ADD_TO_CART', newCart })
}