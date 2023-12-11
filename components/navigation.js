import Link from "next/link"
import styles from "@/app/page.module.css"

import React from 'react'

function Navigation() {
  return (
    <div className={styles.nav}>
        <Link href="/"><h1> Tareas en MongoDB</h1></Link>
        <div className={styles.navdiv}>
        <Link href="/tasks/new" className={styles.navitem}>
            <h3> Crear tarea </h3>
        </Link>
        <h3>|</h3>
        <Link href="/about" className={styles.navitem}>
        <h3> About </h3>
        </Link>
        </div>
        
    </div>
  )
}

export default Navigation