import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import HomePageV2 from "./HomePageV2";
import AboutPage from "./AboutPage";
import ProcessPage from "./ProcessPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import SympleTaxPage from "./SympleTaxPage";

export const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/v2",
    Component: SympleTaxPage,
  },
  {
    path: "/home",
    Component: HomePageV2,
  },
]);
