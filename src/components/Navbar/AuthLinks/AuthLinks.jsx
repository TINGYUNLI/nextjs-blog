"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link
            href="/"
            className={styles.hamlink}
            onClick={() => setOpen(!open)}
          >
            HomePage
          </Link>
          <Link
            href="/"
            className={styles.hamlink}
            onClick={() => setOpen(!open)}
          >
            About
          </Link>
          <Link
            href="/"
            className={styles.hamlink}
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link
              href="/login"
              className={styles.hamlink}
              onClick={() => setOpen(!open)}
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/write"
                className={styles.hamlink}
                onClick={() => setOpen(!open)}
              >
                Write
              </Link>
              <span
                className={styles.hamlink}
                onClick={() => {
                  signOut();
                  setOpen(!open);
                }}
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
