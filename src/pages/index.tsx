import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorElement from "./ErrorElement";
import Home from "./Home";
import Games from "./Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorElement />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
    ],
  },
]);

export default router;
