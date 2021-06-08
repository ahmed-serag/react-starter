/**
 * @author Ahmed Serag
 * @date 2019-07-15
 * @description start point of the react application that uses
 * react dom to manipulate the root div.
 * @filename index.tsx
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, RouteProps } from "react-router-dom";
import { NotFound } from "layouts/not-found";
import { ROUTES } from "./definitions/consts/routes";

/**
 * state of application component.
 *
 * @interface AppState
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppState {
  // State of App Component.
}

/**
 * the Start point of the project.
 *
 * @class App
 * @extends {React.Component<{}, AppState>}
 */
class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          {Object.keys(ROUTES).map((route, index) => {
            // tslint:disable-next-line: variable-name
            const Component = ROUTES[route].component;
            return (
              <Route
                key={index}
                path={ROUTES[route].path}
                exact={ROUTES[route].exact}
                render={(renderProps: RouteProps) => (
                  <Component {...renderProps} {...ROUTES[route].props} />
                )}
              />
            );
          })}
          <Route key="not-found" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

/**
 * The application.
 *
 * @type {(void|Element|React.Component<*, React.ComponentState, *>)}
 */
ReactDOM.render(<App />, document.getElementById("root"));
