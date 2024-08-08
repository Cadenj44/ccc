import React from 'react'
import { Link } from 'react-router-dom'

function notFound() {
  return (
    <div>
        <h1>Oops! This page doesn't exist!</h1>
        <Link to={'/'}>Go Back</Link>
    </div>
  )
}

export default notFound