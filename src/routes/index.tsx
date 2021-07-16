import { Switch, Route, Redirect } from 'react-router-dom';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/carrinho" component={Cart} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
