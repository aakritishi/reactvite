import React from 'react'
import BrandArea from "../sections/home/BrandArea"
import CategoryArea from "../sections/home/CategoryArea"
import ExclusiveArea from "../sections/home/ExclusiveArea"
import FeaturesArea from "../sections/home/FeaturesArea"
import RelatedProduct from "../sections/home/RelatedProduct"
import StartBanner from "../sections/home/StartBanner"
import StartProduct from "../sections/home/StartProduct"


const Home = () => {
  return (
    <div>
		<StartBanner/>
		<FeaturesArea/>
		<CategoryArea/>
		<StartProduct/>
		<ExclusiveArea/>
		<BrandArea/>
		<RelatedProduct/>
    </div>
  )
}

export default Home