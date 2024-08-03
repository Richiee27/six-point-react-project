import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page">
      <div className="center">
        <Link to="/" className="btn primary">
          Not Found
        </Link>
        <h2>Go Back Home!</h2>
      </div>
    </section>
  )
}

export default Error