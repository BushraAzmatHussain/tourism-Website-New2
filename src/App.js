import './App.css';
import Home from './Componenets/Home/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './Componenets/NotFound/NotFound';
import MoreDestinationInfo from './Componenets/MoreDestinationInfo/MoreDestinationInfo/MoreDestinationInfo';
import Login from './Componenets/Login/Login/Login';
import Header from './Componenets/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Componenets/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination/:destinationId">
            <MoreDestinationInfo></MoreDestinationInfo>

          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
