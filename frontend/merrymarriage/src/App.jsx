import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/GlobalRouting";
import GlobalContext from "./GlobalContext/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  );
}

export default App;
