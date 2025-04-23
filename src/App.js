import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo";
import NavItems from "./components/NavItems";
import CardContainer from "./components/CardContainer";
import About from "./components/About";

const AppLayout = () => (
  <>
    <div className="Header">
      <Logo />
      <NavItems />
    </div>
    <div className="Body">
      <CardContainer />
    </div>
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
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export function App() {
  return <RouterProvider router={appRouter}/>
}

export default App;
