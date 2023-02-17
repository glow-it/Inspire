import React from 'react'
import BlogFeed from '../Components/BlogFeed'
import Hero from '../Components/Hero'
import Trending from '../Components/Trending'

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