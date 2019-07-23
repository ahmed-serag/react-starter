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
import { ROUTES } from "./definitions/consts/routes";

/**
 * state of application component.
 *
 * @interface AppState
 */
interface AppState {
  // State of App Component.
}

/**
 * the Start point of the project.
 *
 * @class App
 * @extends {React.Component<{}, AppState>}
 */
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    
    this.state = {
      // Add App State Here if any.
    }

  }

  render(): React.ReactNode {
    
    return (
        <BrowserRouter>
          <Switch>
            {Object.keys(ROUTES).map((route)=> {
              const Component = ROUTES[route].component;
              return (
                <Route
                  path={ROUTES[route].path}
                  exact={ROUTES[route].exact}
                  render={(renderProps: RouteProps) => {
                    return <Component {...renderProps} {...ROUTES[route].props} />;
                  }}
                />
              );
            })}
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
