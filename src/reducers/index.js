import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "userID"],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log("get");
      break;
    case "GET_PRODUCT_SUCC":
      return{
        ...state,
        items:
        action.payload.data
      }
    case "ERR":
      break;
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.newCart,
      };
    case "AUTHENTICATE":
      console.log(action.data);
      break;
    case "ADD_PRODUCT":
      console.log(action.data);
      break;
    case "REGISTER":
      console.log(action.data);
      break;
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);
