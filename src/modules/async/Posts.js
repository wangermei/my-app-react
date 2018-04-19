import React from 'react'

const Posts = ({ posts }) => (
  <div>
    <ul>
      { posts.map((post, index) =>
        <li key={index}>{ post.title }</li>
      ) }
    </ul>
  </div>
)

export default Posts