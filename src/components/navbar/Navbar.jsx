'use client';
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './navbar.module.css'
import DarkMode from '../DarkMode/DarkMode';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About",
    url: "/about"
  },
  {
    id: 3,
    title: "Dashboard",
    url: "/dashboard"
  },
  {
    id: 4,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 5,
    title: "blog",
    url: "/blog"
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact"
  }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        vlog
      </Link>
      <div className={styles.links}>
        <DarkMode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>
          Logout
        </button>
        {/* {session.status === "authenticated" && (
              <button className={styles.logout} onClick={signOut}>
                Logout
              </button>
            )} */}
      </div>
    </div>
  )
}

export default Navbar