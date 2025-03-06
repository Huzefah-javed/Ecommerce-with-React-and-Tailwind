import { QueryClient } from "@tanstack/react-query"
import { Landingpage } from "./Pages/Landing page/LandingPage"
import { createBrowserRouter, RouterProvider } from "react-router"
import { StructurePage } from "./Pages/StructurePage"
import { ProductsPage } from "./Pages/ProductsPage"
import { ProductDetailPage } from "./Pages/ProductDetailPage"
import { Cart } from "./Pages/Cart"


export const App =()=> {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StructurePage/>,
      children: [
        {
          path: "/",
          element: <Landingpage/>
        },{
          path: "/products",
          element: <ProductsPage/>
        },{
          path: `/products/:id`,
          element: <ProductDetailPage/>,
        },{
          path: "/cart",
          element: <Cart/>
        }
      ]
    },

  ])

  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}
