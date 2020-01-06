/**
 * @author Ahmed Serag
 * @date 2020-01-06
 * @description declaration of available static routes in the app.
 * @filename static.ts
 */
import { Route } from "interfaces/route";
import { Home } from "layouts/home";

/**
 * set of static routes in the app.
 */
export const STATIC_ROUTES: { [index: string]: Route } = {
  home: {
    path: "/",
    component: Home,
    exact: true
  }
};
