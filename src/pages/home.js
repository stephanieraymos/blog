import React from 'react'
import trending from '../assets/mocks/trending'
import {PostMasonry} from '../Components/common'


const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3'
    
  }
}

const featuredConfig = {
  0: {
    gridArea: '1 / 1 / 2 / 3',
    height: '300px'
  },
  1: {
    height: '300px'
  },
  3: {
    height: '630px',
    marginLeft: '30px',
    width: '630px'
  }
}

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index]
  })
}

mergeStyles(trending, trendingConfig)

export default function Home () {
  return (
  <section className="container home">
      <div className="row">
          <h2>Trending Posts</h2>

          <PostMasonry posts={trending} columns={3} />
      </div>

  </section>
  )
}