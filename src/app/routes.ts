import { createElement } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { SITE_ONLY_HOME_LIVE } from "../config/site";
import HomePage from "./HomePage";
import HomePageV2 from "./HomePageV2";
import AboutPage from "./AboutPage";
import ProcessPage from "./ProcessPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import ResourcesPage from "./ResourcesPage";

const redirectHome = {
  element: createElement(Navigate, { to: "/", replace: true }),
};

const draftRoutes = [
  { path: "/draft", ...redirectHome },
  { path: "/about", ...redirectHome },
  { path: "/process", ...redirectHome },
  { path: "/services", ...redirectHome },
  { path: "/contact", ...redirectHome },
  { path: "/resources", ...redirectHome },
];

const liveRoutes = [
  { path: "/draft", Component: HomePage },
  { path: "/about", Component: AboutPage },
  { path: "/process", Component: ProcessPage },
  { path: "/services", Component: ServicesPage },
  { path: "/contact", Component: ContactPage },
  { path: "/resources", Component: ResourcesPage },
];

export const router = createBrowserRouter([
  ...(SITE_ONLY_HOME_LIVE ? draftRoutes : liveRoutes),
  {
    path: "/",
    Component: HomePageV2,
  },
  {
    path: "/home",
    Component: HomePageV2,
  },
  ...(SITE_ONLY_HOME_LIVE ? [{ path: "*", ...redirectHome }] : []),
]);
