import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./pages/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("login:", authenticate);
  }, [authenticate]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login setAuthenticate={setAuthenticate} />,
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
