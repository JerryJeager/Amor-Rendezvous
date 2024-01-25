import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
