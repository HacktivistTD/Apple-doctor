import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { LiveReload } from '@remix-run/react';
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import { NextUIProvider } from "@nextui-org/react";

// Import TailwindCSS
import styles from "./tailwind.css"; // Correct import for TailwindCSS styles

// Define the links for TailwindCSS and any additional styles
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }, // TailwindCSS styles
  ...(typeof cssBundleHref !== "undefined" ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <NavBar />
          <Outlet />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
