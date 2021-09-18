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
  dispatch({ type: "GET_PRODUCTS_REQ" });
  return axios
    .get(REACT_APP_GET_PRODUCTS)
    .then(({ data }) => {
      dispatch({
        type: "GET_PRODUCTS_SUCC",
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: "ERR", err });
    });
};

export const getProduct = id => (dispatch, getState) => {
  dispatch({ type: "GET_PRODUCT_REQ", id });
  return axios
    .get(REACT_APP_GET_PRODUCT + id)
    .then(({ data }) => {
      dispatch({
        type: "GET_PRODUCT_SUCC",
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: "ERR", err });
    });
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: "AUTHENTICATE_REQ" });
  return axios
    .post(REACT_APP_LOGIN, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: "AUTHENTICATE_SUCC", payload });
    })
    .catch(err => {
      dispatch({ type: "ERR", err });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT_REQ" })
  return axios
  .post(REACT_APP_LOGOUT)
  .then(()=>{
    dispatch({ type: "LOGOUT_SUCC" })
  })
  .catch(err=>{
    dispatch({ type: 'ERR', err })
  })
}

export const register = data => (dispatch) => {
  dispatch({ type: "REGISTER_REQ" });
  return axios
  .post(REACT_APP_REGISTER,
    data
  )
  .then(payload=>{
    dispatch({ type: "REGISTER_SUCC", payload })
  })
  .catch(err=>{
    dispatch({ type: "ERR", err })
  })
};


export const addProduct = (data, userID) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT_REQ"});
  return axios
  .post(REACT_APP_ADD_PRODUCT+userID, 
    data
  )
  .then(payload=>{
    dispatch({ type: "ADD_PRODUCT_SUCC", payload })
  })
  .catch(err=>{
    dispatch({ type: "ERR", err })
  })
};

export const deleteProduct = (productID, userID) => (dispatch) => {
  dispatch({ type: "DELETE_PROD_REQ" });
  return axios
  .delete(REACT_APP_DELETE_PRODUCT+productID+'/'+userID)
  .then((payload)=>{
    dispatch({ type: "DELETE_PROD_SUCC", payload })
  })
  .catch(err=>{
    dispatch({ type: "ERR", err })
  })
};

export const EditCart = (newCart) => (dispatch) => {
  dispatch({ type: "EDIT_CART", newCart });
};
