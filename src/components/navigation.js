import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from '../images/logo-large.svg'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="https://releaseapp.io"><img src={logo} style={{width: "200px"}}/></Link>
      </li>
      <li>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

