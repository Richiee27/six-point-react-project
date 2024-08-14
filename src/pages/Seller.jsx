import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { sellerData } from '../sellerdata'

const Seller = () => {
  const [seller, setSeller] = useState(sellerData)

  return (
    <section className="seller">
      {seller.length > 0 ? <div className="container seller__container">
        {
          seller.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='sellers'>
              <div className='seller__avatar'>
                <img src={avatar} alt={`wajah ${name}`} />
              </div>
              <div className='seller__info'>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>Seller tidak ditemukan</h2>}
    </section>
  )
}

export default Seller