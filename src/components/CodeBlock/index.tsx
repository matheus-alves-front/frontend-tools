'use client'
import { CardCssContext } from "@/contexts/CardCssContext"
import { useContext } from "react"

import styles from './styles.module.scss'

export function CodeBlock() {
  const {
    border, 
    boxShadow
  } = useContext(CardCssContext)

  return (
    <div className={styles.Content}>
      <div className={styles.Code} style={{
        boxShadow: boxShadow,
        border: border
      }}>
        <p>border: {border};</p>
        <p>box-shadow: {boxShadow}</p>
      </div>
    </div>
  )
}