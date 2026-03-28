import { createElement } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { SITE_ONLY_HOME_LIVE } from "../config/site";
import RootLayout from "./RootLayout";
import HomePage from "./HomePage";
import HomePageV2 from "./HomePageV2";
import AboutPage from "./AboutPage";
import ProcessPage from "./ProcessPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import ResourcesPage from "./ResourcesPage";
import BlogArticlePage from "./BlogArticlePage";
import LegalPage from "./LegalPage";
import SolutionsPage from "./SolutionsPage";
import ServiceDetailPage from "./ServiceDetailPage";
import SitemapPage from "./SitemapPage";

const redirectHome = {
  element: createElement(Navigate, { to: "/", replace: true }),
};

const draftRoutes = [
  { path: "/draft", ...redirectHome },
  { path: "/about", ...redirectHome },
  { path: "/process", ...redirectHome },
  { path: "/services", ...redirectHome },
  { path: "/solutions", ...redirectHome },
  { path: "/solutions/:slug", ...redirectHome },
  { path: "/contact", ...redirectHome },
  { path: "/resources", ...redirectHome },
  { path: "/resources/:slug", ...redirectHome },
  { path: "/sitemap", ...redirectHome },
];

const liveRoutes = [
  { path: "/draft", Component: HomePage },
  { path: "/about", Component: AboutPage },
  { path: "/process", Component: ProcessPage },
  { path: "/services", Component: ServicesPage },
  { path: "/solutions", Component: SolutionsPage },
  { path: "/solutions/:slug", Component: ServiceDetailPage },
  { path: "/contact", Component: ContactPage },
  { path: "/resources", Component: ResourcesPage },
  { path: "/resources/:slug", Component: BlogArticlePage },
  { path: "/sitemap", Component: SitemapPage },
];

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      ...(SITE_ONLY_HOME_LIVE ? draftRoutes : liveRoutes),
      {
        path: "/",
        Component: HomePageV2,
      },
      {
        path: "/home",
        Component: HomePageV2,
      },
      {
        path: "/legal/:tab",
        Component: LegalPage,
      },
      {
        path: "/legal",
        Component: LegalPage,
      },
      ...(SITE_ONLY_HOME_LIVE ? [{ path: "*", ...redirectHome }] : []),
    ],
  },
]);
