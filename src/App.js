import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Quiz from "./components/Quiz";
import Error404 from "./components/Error404";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },

        {
          path: "/quiz",
          element: <Quiz></Quiz>,
        },

        {
          path: "/quiz/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/*",
          element: <Error404></Error404>,
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
