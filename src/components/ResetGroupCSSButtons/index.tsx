import { useContext } from 'react'
import styles from './styles.module.scss'
import { CardCssContext } from '@/contexts/CardCssContext'

export function ResetGroupCSSButtons() {
  const {
    ResetBorder,
    ResetBoxShadow
  } = useContext(CardCssContext)

  return (
    <div className={styles.ButtonGroup}>
      <button 
        onClick={() => ResetBorder()}
        className={styles.Button}>Reset Borders</button>
      <button 
        onClick={() => ResetBoxShadow()}
        className={styles.Button}>Reset Box-Shadows</button>
    </div>
  )
}