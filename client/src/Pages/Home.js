import React from 'react'
import BlogFeed from '../Components/BlogFeed.js'
import Hero from '../Components/Hero.js'
import Trending from '../Components/Trending.js'

function Home() {
  return (
    <div>
        <Hero />
        <Trending />
        <BlogFeed />
    </div>
  )
}

export default Home