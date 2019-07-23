/**
 * @author Ahmed Serag
 * @date 2019-07-15
 * @description declaration of available routes in the app.
 * @filename routes.ts
 */
import { Home } from "layouts/home";
import { NotFound } from "layouts/not-found";

/**
 * map of available routes in the app to their locations in the url.
 */
export const ROUTES = {
  // Add Available Routes with it's Components and other details

  Home: {
    component: Home,
    props: {
      // Add Special Props to the component if needed
    },
    path: "/",
    exact: true
  },
  NotFound: {
    component: NotFound,
    props: {
      // Add Special Props to the component if needed
    },
    exact: false
  }
};
