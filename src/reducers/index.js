import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const initialState = {
    items: [
        {
            title: 'Poprawne filtrowanie',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id: 1,
            province: 'Malopolskie',
            city: 'Krakow',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id: 2,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id: 3,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id: 4,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id:5,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id:6,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id:7,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id:8,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id:9,
            place: 'Zamosc',
            province: 'malopolska',

        },
        {
            title: 'lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ex ligula. Aenean quis vehicula nisi. Nullam ac semper diam, non suscipit tortor. Quisque quis purus imperdiet, aliquam est maximus, lobortis mi.',
            price: 39.99,
            count: 13,
            rate: 4,
            id:10,
            place: 'Zamosc',
            province: 'malopolska'
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