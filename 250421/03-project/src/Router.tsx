import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorComponent from "./components/ErrorComponent";
import Follwers from "./pages/Follwers";
import User from "./pages/User";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Follwers />,
          },
        ],
      },
    ],
  },
]);

export default Router;
