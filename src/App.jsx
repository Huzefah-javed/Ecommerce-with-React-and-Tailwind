import { QueryClient } from "@tanstack/react-query"
import { Landingpage } from "./Pages/Landing page/LandingPage"
import { createBrowserRouter, RouterProvider, useLocation } from "react-router"
import { StructurePage } from "./Pages/StructurePage"
import { ProductsPage } from "./Pages/ProductsPage"
import { ProductDetailPage } from "./Pages/ProductDetailPage"
import { Cart } from "./Pages/Cart"
import { useEffect } from "react"
import { Error } from "./Pages/Error"


export const App =()=> {
  
  const AppRouter = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      })
    }, [location])
  
    return  null;
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><AppRouter/><StructurePage/></>,
      errorElement: <Error/>,
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
