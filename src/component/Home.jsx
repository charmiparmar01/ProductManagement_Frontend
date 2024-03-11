import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="welcome-homepage">
    <h1>Welcome to Our Product Management System</h1>
    <p>Welcome to our platform for managing your products easily! From planning to launching, we've got you covered with tools to make your job simpler and more effective.</p>
    <button><Link to={'/Products'} className='edit'>
                            Products
                          </Link></button>
  </div>
  )
}

export default Home