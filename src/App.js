import React from "react";

//Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";


//Site elements

//routes
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import MainDecks from "./routes/MainDecks";
import NewDecks from "./routes/NewDecks";
import OutdatedDecks from "./routes/OutdatedDecks";
import SignIn from "./routes/SignIn";


//firebase

//firebase hooks


import CreateDeck from "./routes/CreateDeck";

//Router object:
const r_router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "maindecks",
          element: <MainDecks />
        },
        {
          path: "outdateddecks",
          element: <OutdatedDecks />
        },
        {
          path: "newdecks",
          element: <NewDecks />
        },
        {
          path: "createdecks",
          element: <CreateDeck />
        },
        {
          path: "signin",
          element: <SignIn />
        }
      ]
    }
  ]);

const App = () => {

    return(
        <>
        <RouterProvider router={r_router} />
        </>
    )
}

export default App;


