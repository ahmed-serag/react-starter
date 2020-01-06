/**
 * @author Ahmed Serag
 * @date 2020-01-06
 * @description define the route interface.
 * @filename index.ts
 */

/**
 * route object used to define a route in the React App.
 */
export interface Route {
  /**
   * React component that should be rendered when
   * the route is matched.
   *
   * @type {React.ComponentClass}
   * @memberof Route
   */
  component: React.ComponentClass;
  /**
   * the path in the url used to match the route.
   *
   * @type {string}
   * @memberof Route
   */
  path: string;
  /**
   * a boolean which is true if the path should
   * be exact the same to match the route.
   *
   * @type {boolean}
   * @memberof Route
   */
  exact: boolean;
}
