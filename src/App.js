import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Quiz from "./components/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "",
          element: <Home></Home>,
        },

        {
          path: "/quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
