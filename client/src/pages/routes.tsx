import { createBrowserRouter, RouteObject } from "react-router-dom";
import Sign from "./Sign";
const routes: RouteObject[] = [
  {
    path: "",
    element: <Sign />,
    children: [
      {
        path: "/sign",
        element: <Sign />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
