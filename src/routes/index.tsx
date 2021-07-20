import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from '@components/Loading';
import Content from '@containers/Content';
import Layout from '@containers/Layout';

const Cart = lazy(() => import('@pages/Cart'));
const Home = lazy(() => import('@pages/Home'));

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Suspense
          fallback={
            <Content>
              <Loading />
            </Content>
          }
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
          <Route exact path="/carrinho" component={Cart} />
        </Suspense>
      </Layout>
    </Switch>
  );
};

export default Routes;
