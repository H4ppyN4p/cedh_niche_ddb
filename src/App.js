import React from "react";

//Router imports
import { createBrowserRouter, RouterProvider} from "react-router-dom";

//routes
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import MainDecks from "./routes/MainDecks";
import NewDecks from "./routes/NewDecks";
import OutdatedDecks from "./routes/OutdatedDecks";
import SignIn from "./routes/SignIn";
import CreateDeck from "./routes/CreateDeck";
import EditDecks from "./routes/EditDecks";

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
          path: "signin",
          element: <SignIn />
        },
        {
          path: "createdecks",
          element: <CreateDeck />,
          loader: checkAuthCredent
        },
        {
          path: "editdecks",
          element: <EditDecks />
        },
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


