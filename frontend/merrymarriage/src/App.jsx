import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/GlobalRouting";
import GlobalContext from "./GlobalContext/GlobalContext";
import Profile from "./components/profile/Profile";

function App() {
  return (
    // <GlobalContext>
    //   <RouterProvider router={router} />
    // </GlobalContext>
    <Profile />
  );
}

export default App;
