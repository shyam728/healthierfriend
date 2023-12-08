import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import WhatYouShouldDo from "../../components/WhatYouShouldDo"
import About from "../../components/About"
import HealthImp from "../../components/HealthImp"
import Reviews  from "../Blog and Reviews/Review"
import HealthBlog  from "../Blog and Reviews/HealthBlog"
import Footer from "../../components/Footer"


export default function Home(){
    return(<>
         <Navbar/>
         <Hero/>
         <WhatYouShouldDo/>
         <HealthImp/>
         <HealthBlog/>
         <Reviews/>
         <About/>
         <Footer/>
        </>)
}