import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/GlobalRouting";
import GlobalContext from "./GlobalContext/GlobalContext";
import Profile from "./components/profile/Profile";
import LandingPage from "./pages/LandinPage/LandingPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    // <GlobalContext>
    //   <RouterProvider router={router} />
    // </GlobalContext>
    <LandingPage />
    // <PageNotFound/>
  );
}

export default App;
