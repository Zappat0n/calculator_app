import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
