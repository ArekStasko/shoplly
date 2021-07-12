import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import Products from './layouts/products'
import AddProducts from "./pages/addProduct";
import FirstPage from './pages/firstPage'
import Login from './pages/login'
import Register from './pages/register'
import ErrorPage from './pages/error'
import './assets/styles/themes/default/theme.scss';

function App() {
  return (
    <Provider store={store}>
    <div>
     <h1>App</h1>
     <Router>
       <PersistGate persistor={persistor}>
       <Switch>
       <Route exact path='/' component={FirstPage} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
       <Route exact path='/products' component={Products} />
       <Route path='/products/add' component={AddProducts} />
       <Route path='*' component={ErrorPage} />
       </Switch>
       </PersistGate>
     </Router>
    </div>
    </Provider>
  );
}

export default App;
