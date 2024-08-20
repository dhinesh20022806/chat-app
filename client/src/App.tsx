import React from "react";
import router from "./pages/routes";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
