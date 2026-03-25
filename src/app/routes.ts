import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import HomePageV2 from "./HomePageV2";
import AboutPage from "./AboutPage";
import ProcessPage from "./ProcessPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import ResourcesPage from "./ResourcesPage";

export const router = createBrowserRouter([
  {
    path: "/draft",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/process",
    Component: ProcessPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/resources",
    Component: ResourcesPage,
  },
  {
    path: "/",
    Component: HomePageV2,
  },
  {
    path: "/home",
    Component: HomePageV2,
  },
]);
