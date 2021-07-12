import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const initialState = {
    items: [
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
        },
    ]
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'TEST' :
    console.log('reducer test', state)
    return {
        ...state
    };
   default :
    return state; 
  }
}

export default persistReducer(persistConfig, rootReducer);