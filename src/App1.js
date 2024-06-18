import React, { StrictMode, Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { useState } from "react";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import InstaMartContainer from "./components/Instamart/InstaMartContainer";
import CategoryProducts from "./components/Instamart/CategoryProducts";

const About = lazy(() => {
  return import("./components/About");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    const data = {
      name: "Tushar Meena",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// createBrowserRouter is a function that serves as the recommended approach for defining application routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/instamart/",
    element: <InstaMartContainer />, // Use the new layout here
    errorElement: <Error />,
    children: [],
  },
  {
    path: "category/:categoryName/:nodeId",
    element: <CategoryProducts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <RouterProvider router={appRouter} />
  // </StrictMode>
);
