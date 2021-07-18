import { Switch, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import Cart from '@pages/Cart';
import Home from '@pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Home} />
        <Route exact path="/carrinho" component={Cart} />
      </Layout>
    </Switch>
  );
};

export default Routes;
