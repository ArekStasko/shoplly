import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

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
        items:
        action.payload.data
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
    case "ERR":
      console.log(action.err)
      break;
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.newCart,
      };
    case "AUTHENTICATE_REQ":
      return{
        ...state,
        loading: true
      }
    case "AUTHENTICATE_SUCC":
      return{
        ...state,
        loading: false,
        user: action.payload.data
      }
    case "LOGOUT_SUCC":
      return{
        ...state,
        user: null
      }
    case "ADD_PRODUCT":
      console.log(action.data);
      break;
    case "REGISTER_REQ":
      return{
        ...state,
        loading: true,
      }
    case "REGISTER_SUCC":
      return{
        ...state,
        loading: false,
        user: action.payload.data
      }
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);
