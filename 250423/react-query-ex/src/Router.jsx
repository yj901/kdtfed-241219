import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ReactQuery from "./pages/ReactQuery";
import NormalPage from "./pages/NormalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      },
      {
        path: "/normal-page",
        element: <NormalPage />,
      },
    ],
  },
]);

export default router;
