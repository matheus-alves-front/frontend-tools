'use client'
import { CardCssContext } from "@/contexts/CardCssContext"
import { useContext } from "react"

import styles from './styles.module.scss'

export function CodeBlock() {
  const {
    border, 
    boxShadow,
    borderRadius
  } = useContext(CardCssContext)

  return (
    <div className={styles.Content}>
      <div className={styles.Code} style={{
        boxShadow: boxShadow,
        border: border,
        borderRadius: borderRadius
      }}>
        <p>border: {border};</p>
        <p>border-radius: {borderRadius};</p>
        <p>box-shadow: {boxShadow};</p>
      </div>
    </div>
  )
}