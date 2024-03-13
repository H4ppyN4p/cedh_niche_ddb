import React from "react";
import ReactDOM from "react-dom/client";


//Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";


//Site elements
//import Navbar from "./elements/Navbar"
import Footer from "./elements/Footer";

//routes
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import OutdatedDecks from "./routes/OutdatedDecks";

import reportWebVitals from "./reportWebVitals";


//Router object:
const r_router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "outdated",
        element: <OutdatedDecks />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={r_router} />
    <Footer />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
