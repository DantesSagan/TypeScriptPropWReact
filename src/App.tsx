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
const UseReducerHook = lazy(() => import('./Components/UseReducerHook'));
const UseContextHook = lazy(() => import('./Components/UseContextHook'));
const UserContext = lazy(() => import('./Components/UserContext'));
const UseRef = lazy(() => import('./Components/UseRef'));
const ClassComponent = lazy(() => import('./Components/ClassComponent'));
const ComponentProp = lazy(() => import('./Components/ComponentProp'));
const GenericProp = lazy(() => import('./Components/GenericProp'));
const RestrictProps = lazy(() => import('./Components/RestrictingProps'));
const TemplateLiteralsAndExclude = lazy(
  () => import('./Components/TemplateLiteralsAndExclude')
);
const WrappingHTMLElement = lazy(
  () => import('./Components/WrappingHTMLElement')
);
const ExtractingAComponentsPropTypes = lazy(
  () => import('./Components/ExtractingAComponentsPropTypes')
);
const PolymorphicComponents = lazy(
  () => import('./Components/PolymorphicComponents')
);
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
          <Route path={ROUTES.UseReducerHook} component={UseReducerHook} />
          <Route path={ROUTES.UseContextHook} component={UseContextHook} />
          <Route path={ROUTES.UserContext} component={UserContext} />
          <Route path={ROUTES.UseRef} component={UseRef} />
          <Route path={ROUTES.ClassComponent} component={ClassComponent} />
          <Route path={ROUTES.ComponentProp} component={ComponentProp} />
          <Route path={ROUTES.GenericProp} component={GenericProp} />
          <Route path={ROUTES.RestrictProps} component={RestrictProps} />
          <Route
            path={ROUTES.TemplateLiteralsAndExclude}
            component={TemplateLiteralsAndExclude}
          />
          <Route
            path={ROUTES.WrappingHTMLElement}
            component={WrappingHTMLElement}
          />
          <Route
            path={ROUTES.ExtractingAComponentsPropTypes}
            component={ExtractingAComponentsPropTypes}
          />
          <Route
            path={ROUTES.PolymorphicComponents}
            component={PolymorphicComponents}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
