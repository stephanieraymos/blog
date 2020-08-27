import React from 'react'

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
              {link.title}
            </li>
        ))}
      </ul>

    </nav>)
}