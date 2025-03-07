
import { HeroSection } from "./LandingPageSections/HeroSection"
import { ProductsCategories } from "./LandingPageSections/ProductsCategories"
import { ProductsShowCase } from "./LandingPageSections/ProductsShowCase"

export const Landingpage =()=> {

    return (<>
        <HeroSection 
           bg_link="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            heading="Elevate Your Shopping Experience"
             para="Shop premium products at unbeatable prices with fast shipping and secure payments."
              button_text="Shop Now"  />
        <ProductsCategories/>
        <ProductsShowCase  searchedItem= "phone" title="New Electronic" titleCategory="See all category"/>
       <HeroSection
         bg_link="https://blackdiamond-cms.zaneray.com/cms/images/Z5qWIpbqstJ9-A_x_Access_Down_Hoody_Womens_Homepage_Hero_2880x1620px.jpg?auto=format%2Ccompress&w=2400&h=1350"
        heading="Everyday Down"
        para="The all new Access Down 1.0"
        button_text="shop now"
         />
        <ProductsShowCase  searchedItem= "laptop" title="New Laptops" titleCategory="See all category"/>
         <HeroSection
         bg_link="https://blackdiamond-cms.zaneray.com/cms/images/ZsZXG0aF0TcGJMbK_S24-Hydra-Homepage-Hero-2880x1620px.jpg?auto=format%2Ccompress&w=2400&h=1350"
         heading="The Hydra Ice Tool"
         para="The Many-Headed Beast"  
         button_text="Shop Now"
         />
        <ProductsShowCase  searchedItem= "shirt" title="New shirts" titleCategory="See all category"/>
    </>)
}