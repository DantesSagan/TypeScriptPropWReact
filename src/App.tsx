import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from './Components/constants/routes';

import Loader from './Components/fallback/loader';

import './App.css';
import Header from './Components/header';

const Main = lazy(() => import('./main'));
const Props = lazy(() => import('./Components/Props'));
const BasicProps = lazy(() => import('./Components/BasicProps'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path={ROUTES.Props} component={Props} />
          <Route path={ROUTES.BasicProps} component={BasicProps} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
