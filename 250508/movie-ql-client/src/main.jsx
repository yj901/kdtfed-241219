import { createRoot } from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./client";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    {" "}
    <RouterProvider router={router} />
  </ApolloProvider>
);
