import { HeroSection } from "./LandingPageSections/HeroSection"
import { JacketSection } from "./LandingPageSections/JacketSection"
import { ProductsCategories } from "./LandingPageSections/ProductsCategories"

export const Landingpage =()=> {
    return (<>
        <HeroSection/>
        <ProductsCategories/>
        <JacketSection/>
    </>)
}