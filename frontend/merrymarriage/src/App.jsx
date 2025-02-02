import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/GlobalRouting";
import GlobalContext from "./GlobalContext/GlobalContext";
import Profile from "./components/profile/Profile";
import LandingPage from "./pages/LandinPage/LandingPage";

function App() {
  return (
    // <GlobalContext>
    //   <RouterProvider router={router} />
    // </GlobalContext>
    <LandingPage />
  );
}

export default App;
