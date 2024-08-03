import React, { useState } from 'react'
import { DUMMY_POSTS } from '../dataa'
import PostItem from '../components/PostItem'

const Kategori = () => {
  const [posts, setPost] = useState(DUMMY_POSTS)
  return (
    <section>
    {posts.length > 0 ? <div className="container posts__container">
      {posts.map(
        ({ id, image, category, title, desc, new_price, sellerID,}) => (
          <PostItem
            key={id}
            postID={id}
            image={image}
            category={category}
            title={title}
            desc={desc}
            new_price={new_price}
            sellerID={sellerID}
          />
        )
      )}
    </div> : <h2 className="center">Ups, tidak ada postingan</h2> }
  </section>
  )
}

export default Kategori