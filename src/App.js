import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo";
import NavItems from "./components/NavItems";
import CardContainer from "./components/CardContainer";
import About from "./components/About";
import Contact from "./components/Contact";
// import { Outlet } from "react-router-dom";


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
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export function App() {
  return <RouterProvider router={appRouter}/>
}

export default App;
