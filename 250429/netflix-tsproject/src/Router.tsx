import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Videos from "./pages/Videos";
import Review from "./pages/Review";
import Search from "./pages/Search";

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
        path: "/movies/:movieId",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
        children: [
          {
            path: "review",
            element: <Review />,
          },
          {
            path: "video",
            element: <Videos />,
          },
        ],
      },
    ],
  },
]);

export default router;
