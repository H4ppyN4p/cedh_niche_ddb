import React from "react";

//Router imports
import { createBrowserRouter, RouterProvider, Navigate, Outlet, redirect } from "react-router-dom";

//routes
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import MainDecks from "./routes/MainDecks";
import NewDecks from "./routes/NewDecks";
import OutdatedDecks from "./routes/OutdatedDecks";
import SignIn from "./routes/SignIn";
import CreateDeck from "./routes/CreateDeck";



//firebase
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth"

//firebase auth

//firebase hooks

//loader functions
import {checkAuthCredent} from "./LoaderFunctions"



//Router object:
const r_router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "maindecks",
          element: <MainDecks />,
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
          element: <CreateDeck />,
          loader: checkAuthCredent
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


