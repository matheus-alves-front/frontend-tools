"use client"
import { useContext, useEffect, useState } from "react";
import styles from './page.module.scss'
import { CardCssContext } from "@/contexts/CardCssContext";
import { ResetGroupCSSButtons } from "@/components/ResetGroupCSSButtons";

// box-shadow: ${horizontal} ${vertical} ${blur} ${spread/width} ${color}

export default function BoxShadowPage() {
  const {
    UpdateBoxShadow,
  } = useContext(CardCssContext)

  const [horizontal, setHorizontal] = useState("10px")
  const [vertical, setVertical] = useState("10px")
  const [blur, setBlur] = useState("5px")
  const [spread, setSpread] = useState("0px")
  const [color, setColor] = useState("#eeeeee")
  const [colorOpacity, setColorOpacity] = useState('1')

  useEffect(() => {
    const colorRgba = converterHexParaRGBA(color, colorOpacity) 
    UpdateBoxShadow(`${horizontal} ${vertical} ${blur} ${spread} ${colorRgba}`)
  }, [
    horizontal,
    vertical,
    blur,
    spread,
    color,
    colorOpacity
  ])

  function converterHexParaRGBA(hexadecimal: string, opacity: string) {
    const corHex = hexadecimal;
    const r = parseInt(corHex.slice(1, 3), 16);
    const g = parseInt(corHex.slice(3, 5), 16);
    const b = parseInt(corHex.slice(5, 7), 16);
    const a = opacity; // Defina o valor alpha conforme necessário (de 0 a 1)

    const corRGBA = `rgba(${r}, ${g}, ${b}, ${a})`;

    return corRGBA
  }

  return (
      <section className={styles.Content}>
        <ResetGroupCSSButtons />
        <form>
          <fieldset>
            <label htmlFor="horizontal">horizontal: {horizontal}</label>
            <input 
              onChange={(e) => setHorizontal(`${e.target.value}px`)} 
              type="range" 
              name="horizontal" 
              min={'-50'}
              max={'50'}
              defaultValue={10}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="vertical">vertical: {vertical}</label>
            <input 
              onChange={(e) => setVertical(`${e.target.value}px`)}
              type="range"
              name="vertical"
              min={'-50'}
              max={'50'}
              defaultValue={10}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="blur">blur: {blur}</label>
            <input 
              onChange={(e) => setBlur(`${e.target.value}px`)} 
              type="range" 
              name="blur" 
              defaultValue={5}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="spread">spread: {spread}</label>
            <input 
              onChange={(e) => setSpread(`${e.target.value}px`)} 
              type="range" 
              name="spread" 
              defaultValue={0}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="color">color {color}</label>
            <input 
              onChange={(e) => setColor(`${e.target.value}`)}
              type="color" 
              name="color" 
              defaultValue={color}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="spread">Opacity: {colorOpacity}</label>
            <input 
              onChange={(e) => setColorOpacity(`${e.target.value}`)} 
              type="range" 
              name="spread" 
              min={0}
              max={1}
              step={0.01}
              defaultValue={1}
            />
          </fieldset>
        </form>
      </section>
  )
}