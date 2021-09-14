import axios from "axios";
const {
  REACT_APP_GET_PRODUCTS,
  REACT_APP_REGISTER,
  REACT_APP_LOGIN,
  REACT_APP_LOGOUT,
  REACT_APP_GET_PRODUCT,
  REACT_APP_ADD_PRODUCT,
  REACT_APP_DELETE_PRODUCT,
} = process.env;

export const getProducts = () => (dispatch, getState) => {
  dispatch({ type: "GET_PRODUCTS" });
  return axios
  .get(REACT_APP_GET_PRODUCTS)
  .then(({ data })=> {
    dispatch({
      type: "GET_PRODUCT_SUCC",
      payload: {
        data,
      }
    })
  })
  .catch(err=>{
    dispatch({ type: 'ERR', err})
  })
};

export const register = (username, password, contact, image) => (dispatch) => {
  dispatch({ type: "REGISTER", data: { username, password, contact, image } });
};

export const addProduct = (details, images) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT", data: { details, images } });
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: "AUTHENTICATE", data: { username, password } });
};

export const EditCart = (newCart) => (dispatch) => {
  dispatch({ type: "ADD_TO_CART", newCart });
};
