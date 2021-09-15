import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from './Components/routes/routes';

import Loader from './Components/fallback/loader';
import Header from './Components/header';

import './App.css';

const Main = lazy(() => import('./main'));
const Props = lazy(() => import('./Components/Props'));
const BasicProps = lazy(() => import('./Components/BasicProps'));
const AdvancedProps = lazy(() => import('./Components/AdvancedProps'));
const EventProps = lazy(() => import('./Components/EventProps'));
const StyleProps = lazy(() => import('./Components/StyleProps'));
const PropsTypesAndTips = lazy(() => import('./Components/PropsTypesNTips'));
const UseStateHook = lazy(() => import('./Components/UseStateHook'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path={ROUTES.Props} component={Props} />
          <Route path={ROUTES.BasicProps} component={BasicProps} />
          <Route path={ROUTES.AdvancedProps} component={AdvancedProps} />
          <Route path={ROUTES.EventProps} component={EventProps} />
          <Route path={ROUTES.StyleProps} component={StyleProps} />
          <Route
            path={ROUTES.PropsTypesAndTips}
            component={PropsTypesAndTips}
          />
          <Route path={ROUTES.UseStateHook} component={UseStateHook} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
