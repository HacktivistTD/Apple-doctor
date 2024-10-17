import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { LiveReload } from '@remix-run/react'; // Correct import for LiveReload
import NavBar from "~/components/NavBar";

import Footer from "~/components/Footer";
import "./tailwind.css"; 

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
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
    
      </body>
    </html>
  );
}
