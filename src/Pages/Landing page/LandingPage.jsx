import { HeroSection } from "./LandingPageSections/HeroSection"
import { JacketSection } from "./LandingPageSections/JacketSection"
import { ProductsCategories } from "./LandingPageSections/ProductsCategories"

export const Landingpage =()=> {
    return (<>
        <HeroSection 
           bg_link=""
            heading="Elevate Your Shopping Experience"
             para="Shop premium products at unbeatable prices with fast shipping and secure payments."
              button_text="Shop Now" />
        <ProductsCategories/>
       <HeroSection
         bg_link="https://blackdiamond-cms.zaneray.com/cms/images/Z5qWIpbqstJ9-A_x_Access_Down_Hoody_Womens_Homepage_Hero_2880x1620px.jpg?auto=format%2Ccompress&w=2400&h=1350"
        heading="Everyday Down"
        para="The all new Access Down 1.0"
        button_text="shop now"
         />
         <HeroSection
         bg_link="https://blackdiamond-cms.zaneray.com/cms/images/ZsZXG0aF0TcGJMbK_S24-Hydra-Homepage-Hero-2880x1620px.jpg?auto=format%2Ccompress&w=2400&h=1350"
         heading="The Hydra Ice Tool"
         para="The Many-Headed Beast"  
         button_text="Shop Now"
         />
    </>)
}