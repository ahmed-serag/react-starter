/**
 * @author Ahmed Serag
 * @date 2020-01-06
 * @description declaration of available routes in the App.
 * @filename index.ts
 */
import { Route } from "interfaces/route";
import { STATIC_ROUTES } from "./static";
import { USER_ROUTES } from "./user";

/**
 * set of routes available in the app.
 */
export const ROUTES: { [index: string]: Route } = {
  ...STATIC_ROUTES,
  ...USER_ROUTES
};
