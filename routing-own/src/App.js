import React from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Nav from './app/nav';
import Home from './app/home';
import Features from './app/features';
import Pricing from './app/pricing';
import PricingDetails from './app/pricingDetails';
import NotFound from './app/notfound';
import Login from './app/login';
import Register from './app/register';

function App() {
  return (
   <React.Fragment>
      <Nav />
      <div className="container">
      <Switch>
      <Route path="/price/:price/:name" component={PricingDetails} />
      <Redirect from="/eggs" to="/price" />
      <Route path="/price" render={(props)=><Pricing onDelete="Deteled" {...props} />}/>
      <Route path="/features" component={Features}/>
      <Route path="/not-found" component={NotFound} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" exact component={Home}/>
      <Redirect to="/not-found" />
      {/* <Route path="/" exact component={Home}/> */}
      </Switch>
      </div>
   </React.Fragment>
  );
}

export default App;
