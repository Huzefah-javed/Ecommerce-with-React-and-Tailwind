
import { lazy, Suspense } from "react"
const HeroSection= lazy(()=>import ("./LandingPageSections/HeroSection"))
import { ProductsCategories } from "./LandingPageSections/ProductsCategories"
const ProductsShowCase = lazy(()=>import ("./LandingPageSections/ProductsShowCase"))

 const Landingpage =()=> {

    return (<>
        <Suspense fallback={<div className="h-dvh bg-black">Loading...</div>}><HeroSection 
           bg_link="/main-hero-section-image.webp" 
            heading="Elevate Your Shopping Experience"
             para="Shop premium products at unbeatable prices with fast shipping and secure payments."
              button_text="Shop Now"  /></Suspense>
        <ProductsCategories/>
        <Suspense fallback={<div>Loading...</div>}><ProductsShowCase  searchedItem= "phone" title="New Electronic" titleCategory="See all category" directlyShown={false}/></Suspense>
        <Suspense fallback={<div>Loading...</div>}><HeroSection
         bg_link="/jacket-bg-photo.avif"
        heading="Everyday Down"
        para="The all new Access Down 1.0"
        button_text="shop now"
         /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><ProductsShowCase  searchedItem= "laptop" title="New Laptops" titleCategory="See all category" directlyShown={false}/></Suspense>
        <Suspense fallback={<div>Loading...</div>}><HeroSection
         bg_link="/hydra-bg-photo.webp"
         heading="The Hydra Ice Tool"
         para="The Many-Headed Beast"  
         button_text="Shop Now"
         /></Suspense>
       <Suspense fallback={<div>Loading...</div>}> <ProductsShowCase  searchedItem= "shirt" title="New shirts" titleCategory="See all category" directlyShown={false}/></Suspense>
    </>)
}

export default Landingpage;