import React from 'react'
import {Link} from 'react-router-dom'
const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Login',
    path: '/login'
  }
]

export default function Nav() {
  return (
    <nav className="site-nav">
      <span>Blog</span>
      <ul>
        { navLinks.map((link, index) => (
            <li key={index}>
              <Link to= {link.path}>{link.title}</Link>
            </li>
        ))}
      </ul>
    </nav>)
}