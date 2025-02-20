import { QueryClient } from "@tanstack/react-query"
import { Landingpage } from "./Pages/Landing page/LandingPage"

export const App =()=> {

  const queryClient = new QueryClient()
  return <>
    <Landingpage/>
  </>
}
