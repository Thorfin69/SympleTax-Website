import { useEffect } from "react";
import { Outlet } from "react-router";
import { DisclaimerBanner } from "./components/v2/DisclaimerBanner";
import { CookieConsentBanner } from "./components/v2/CookieConsentBanner";
import { useScrollToTop } from "./hooks/useScrollToTop";

export default function RootLayout() {
  useScrollToTop();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <Outlet />
      <DisclaimerBanner />
      <CookieConsentBanner />
    </>
  );
}
