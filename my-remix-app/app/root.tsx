import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { LiveReload } from '@remix-run/react'; // Correct import for LiveReload
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import "./tailwind.css"; 
import {NextUIProvider} from "@nextui-org/react";
export function links() {
  return [
   
  ];
}

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
