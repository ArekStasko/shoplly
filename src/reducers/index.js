import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  cart:[]
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCC":
      return{
        ...state,
        redirect: false,
        loading: false,
        items: [
          ...action.payload.data
        ]
      }
    case "GET_PRODUCT_REQ":
      return{
        ...state,
        loading: true,
      }
    case "GET_PRODUCT_SUCC":
      return{
        ...state,
        loading: false,
        product:
        action.payload.data
      }
    case "AUTHENTICATE_REQ":
      return{
        ...state,
        loading: true
      }
    case "AUTHENTICATE_SUCC":
      return{
        ...state,
        loading: false,
        user: action.payload.data,
        flash: {
          type: 'SUCCESS',
          message: 'Hello again !'
        }
      }
    case "AUTHENTICATE_ERR":
      return{
        ...state,
        loading: false,
        flash: {
          type: 'ERROR',
          message: 'Wrong password or username'
        }
      }
    case "LOGOUT_SUCC":
      return{
        ...state,
        user: null,
        flash: {
          type: 'SUCCESS',
          message: 'Goodbye !'
        }
      }
    case "REGISTER_REQ":
      return{
        ...state,
        loading: true,
      }
    case "REGISTER_SUCC":
      return{
        ...state,
        loading: false,
        user: action.payload.data,
        flash: {
          type: 'SUCCESS',
          message: 'Hello on shoplly !'
        }
      }
    case "REGISTER_ERR":
      return {
        ...state,
        loading: false,
        flash: {
          type: 'ERROR',
          message: 'Fill out the form'
        }
      }
    case "EDIT_CART":
      return {
        ...state,
        cart: action.newCart,
      };
    case "ADD_PRODUCT_REQ":
      return{
        ...state,
        loading: true,
      }
    case "ADD_PRODUCT_SUCC":
      return{
        ...state,
        items: [
          ...state.items,
          action.payload.data
        ],
        redirect: true,
        loading: false,
        flash: {
          type: 'SUCCESS',
          message: 'Succesfully added product !'
        }
      }
    case "DELETE_PROD_SUCC":
      return{
        ...state,
        items: [
          ...action.payload.data
        ],
        redirect: true,
        flash: {
          type: 'SUCCESS',
          message: 'Succesfully deleted product !'
        }
      }
    case "RESET_FLASH":
      return{
        ...state,
        flash: null
      }
    case "ERR":
      return{
        ...state,
        flash: {
          type: 'ERROR',
          message: 'We have an error'
        }
      }
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);
