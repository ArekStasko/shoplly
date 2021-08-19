import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [
    {
      title: "Poprawne filtrowanie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '1',
      imgSource: `https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/3491d.jpg`,
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      place: "Krakow",
      category: 'electronics',
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: false,
      negotiations: false,
      condition: 'Used'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '2',
      place: "Zamosc",
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/sample.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      category: 'electronics',
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: true,
      negotiations: true,
      condition: 'New'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '3',
      place: "Zamosc",
      category: 'electronics',
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/3491d.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: false,
      negotiations: false,
      condition: 'New'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '4',
      place: "Zamosc",
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/sample.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      category: 'electronics',
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: true,
      negotiations: true,
      condition: 'Damaged'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '5',
      place: "Zamosc",
      category: 'electronics',
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/3491d.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: false,
      negotiations: false,
      condition: 'Used'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '6',
      place: "Zamosc",
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/sample.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      category: 'electronics',
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: true,
      negotiations: true,
      condition: 'Used'
    },
    {
      title: "Co za zena",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 64.99,
      count: 13,
      rate: 4,
      id: '7',
      place: "Krakow",
      category: 'electronics',
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/3491d.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: false,
      negotiations: false,
      condition: 'New'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '8',
      place: "Zamosc",
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/sample.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      category: 'electronics',
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: true,
      negotiations: true,
      condition: 'New'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '9',
      place: "Zamosc",
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/3491d.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      category: 'electronics',
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: false,
      negotiations: false,
      condition: 'Damaged'
    },
    {
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.",
      price: 39.99,
      count: 13,
      rate: 4,
      id: '10',
      place: "Zamosc",
      category: 'electronics',
      imgSource: 'https://res.cloudinary.com/dulsntqev/image/upload/v1629228772/sample.jpg',
      userImgExample: `https://res.cloudinary.com/dulsntqev/image/upload/w_70,h_70,c_fill,r_max/user.jpg`,
      subCategory: 'phones',
      userName: 'loremIpsum',
      ship: true,
      negotiations: true,
      condition: 'Used'
    },
  ],
  userExample: {
    userName: 'Kamil',
    surname: 'Nowak',
    place: 'Krakow',
  }
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      console.log("reducer test", state);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);
