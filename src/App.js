import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestrauntMenu";


const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    {/* <div className="Footer">
        <CopyRight/>
        <Links/>
        <Address/>
    </div> */}
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // this will show on route errors
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      // more routes here
    ],
  },
]);

export function App() {
  return <RouterProvider router={appRouter}/>
}

export default App;
