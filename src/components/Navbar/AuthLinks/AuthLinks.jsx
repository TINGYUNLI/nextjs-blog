"use client";

import React, { useState } from 'react'
import styles from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {

  const [open,setOpen] = useState(false);
  const status = "authentication";

  return (
    <>
      {status === "notauthentication" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.hamlink}>HomePage</Link>
          <Link href="/" className={styles.hamlink}>About</Link>
          <Link href="/" className={styles.hamlink}>Contact</Link>
          {status === "authentication" ? (
            <Link href="/login" className={styles.hamlink}>Login</Link>
          ) : (
            <>
              <Link href="/write" className={styles.hamlink}>Write</Link>
              <span className={styles.hamlink}>Logout</span>
            </>
          )}
        </div>
      )}

    </>
  )
}

export default AuthLinks