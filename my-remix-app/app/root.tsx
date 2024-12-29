import { Links, Meta, Outlet, Scripts, ScrollRestoration, LiveReload } from '@remix-run/react';
import { LinksFunction, MetaFunction } from "@remix-run/node"; // Ensure you import these types
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import { NextUIProvider } from "@nextui-org/react";

// Import TailwindCSS styles
import styles from "./tailwind.css"; // Correct import for TailwindCSS styles
import '@fortawesome/fontawesome-svg-core/styles.css'; // Prevent FontAwesome from adding its own CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disable auto CSS injection

// Define the links for TailwindCSS and any additional styles
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }, // TailwindCSS styles
];

// Define meta tags for the application
export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { title: "Apple Doctor" }
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
