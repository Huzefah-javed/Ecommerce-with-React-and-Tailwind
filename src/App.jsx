import { lazy, Suspense, useEffect } from "react"
import { QueryClient } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider, useLocation } from "react-router"
import { StructurePage } from "./Pages/StructurePage"
const Landingpage = lazy(()=>import ("./Pages/Landing page/LandingPage"))
const ProductsPage = lazy(()=>import ("./Pages/ProductsPage"))
const ProductDetailPage = lazy(()=>import ("./Pages/ProductDetailPage"))
const Cart = lazy(()=>import ("./Pages/Cart"))
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
          element: <Suspense fallback={<div className="bg-white h-dvh flex justify-center items-center"><div className="loader"></div></div>}><Landingpage/></Suspense>
        },{
          path: "/products",
          element: <Suspense fallback={<div className="bg-white h-dvh flex justify-center items-center"><div className="loader"></div></div>}><ProductsPage/></Suspense>
        },{
          path: `/products/:id`,
          element: <Suspense fallback={<div className="bg-white h-dvh flex justify-center items-center"><div className="loader"></div></div>}><ProductDetailPage/></Suspense>,
        },{
          path: "/cart",
          element: <Suspense fallback={<div className="bg-white h-dvh flex justify-center items-center"><div className="loader"></div></div>}><Cart/></Suspense>
        }
      ]
    },

  ])

  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}
