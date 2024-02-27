"use client";

import React, { useContext } from 'react'
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {

  const {theme,toggle} = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {backgroundColor:"white"} : {backgroundColor:"black"}}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={styles.ball} style={theme === "dark" ? {left: 2,backgroundColor: "black"} : {right:2,backgroundColor: "white"}}></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle;