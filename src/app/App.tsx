import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DisclaimerBanner } from "./components/v2/DisclaimerBanner";
import { CookieConsentBanner } from "./components/v2/CookieConsentBanner";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <DisclaimerBanner />
      <CookieConsentBanner />
    </>
  );
}
