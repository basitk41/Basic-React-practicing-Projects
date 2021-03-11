import './App.css';
import { Route , Switch } from 'react-router-dom';
import Nav from './components/nav';
import Form from './components/form';
import Home from './components/home';
import RenderData from './components/renderingData';

function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/posts" component={RenderData} />
        <Route path="/form" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
