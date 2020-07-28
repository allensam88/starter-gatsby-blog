import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from '../images/logo-large.svg'

export default () => (
  <div className={styles.navContainer}>
    <Link to="https://releaseapp.io"><img src={logo} style={{height: "50px"}}/></Link>
    <nav role="navigation" className="navContainer">
      <ul className={styles.navigation}>
      
        <li className={styles.navigationItem}>
          <Link to="/announcements/">Announcements</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/articles/">Articles</Link>
        </li>
      </ul>
    </nav>
  </div>
)

