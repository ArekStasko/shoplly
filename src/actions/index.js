export const test = () => (dispatch) => {
  dispatch({ type: "TEST" })
};

export const register = (username, password, contact, image) => (dispatch) => {
  dispatch({ type: 'REGISTER', data: { username, password, contact, image } })       
}

export const addProduct = (details, images) => (dispatch) => {
  dispatch({ type: 'ADD_PRODUCT', data: { details, images } })       
}

export const authenticate = (username, password) => (dispatch) => {
    dispatch({ type: 'AUTHENTICATE', data: { username, password } })       
}

export const EditCart = (newCart) => (dispatch) => {
  dispatch({ type: 'ADD_TO_CART', newCart })
}