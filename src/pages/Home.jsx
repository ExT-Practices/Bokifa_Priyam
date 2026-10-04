import React from 'react'
import Navbar from '../component/sections/Navbar'
import Hero from '../component/sections/Hero'
import WhoWeAre from '../component/sections/WhoWeAre'
import PicksForYou from '../component/sections/PicksForYou'
import TrendingBooks from '../component/sections/TrendingBooks'
import BookstoreBestsellers from '../component/sections/BookstoreBestsellers'
import KidsBanner from '../component/sections/KidsBanner'
import NewsAndEvents from '../component/sections/NewsAndEvents'
import TopCategories from '../component/sections/TopCategories'
import ServiceFeatures from '../component/sections/ServiceFeatures'
import PromoBanner from '../component/sections/PromoBanner'
import AuthorOfTheMonth from '../component/sections/AuthorOfTheMonth'
import Newsletter from '../component/sections/Newsletter'
import Footer from '../component/sections/Footer'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <PicksForYou />
      <TrendingBooks />
      <PromoBanner />
      <AuthorOfTheMonth />
      <BookstoreBestsellers />
      <KidsBanner />
      <NewsAndEvents />
      <TopCategories />
      <ServiceFeatures />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default Home