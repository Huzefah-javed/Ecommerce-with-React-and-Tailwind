import { QueryClient } from "@tanstack/react-query"
import { Landingpage } from "./Pages/Landing page/LandingPage"
import { createBrowserRouter, RouterProvider } from "react-router"
import { StructurePage } from "./Pages/StructurePage"
import { ProductsPage } from "./Pages/ProductsPage"
import { ProductDetailPage } from "./Pages/ProductDetailPage"


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
        }
      ]
    },

  ])

  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}
