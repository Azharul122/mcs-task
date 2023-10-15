import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Common from "./Components/Common/Common";
import Home from "./Components/Home/Home";
import SearchResults from "./Components/SearchResults/SearchResults";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Common></Common>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"searchresults",
        element:<SearchResults></SearchResults>
      }
    ]
}
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
