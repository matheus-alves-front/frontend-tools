"use client"
import { CodeBlock } from "@/components/CodeBlock";
import { useContext, useEffect, useState } from "react";
import styles from './page.module.scss'
import { CardCssContext } from "@/contexts/CardCssContext";
import { ResetGroupCSSButtons } from "@/components/ResetGroupCSSButtons";

// box-shadow: ${horizontal} ${vertical} ${blur} ${spread/width} ${color}

export default function BorderPage() {
  const {
    UpdateBorder,
  } = useContext(CardCssContext)

  const [width, setWidth] = useState("2px")
  const [style, setStyle] = useState("solid")
  const [color, setColor] = useState("#00000")

  useEffect(() => {
    const colorRgba = converterHexParaRGBA(color)
    UpdateBorder(`${width} ${style} ${colorRgba}`)
  }, [
    width,
    style,
    color
  ])

  function converterHexParaRGBA(hexadecimal: string) {
    const corHex = hexadecimal;
    const r = parseInt(corHex.slice(1, 3), 16);
    const g = parseInt(corHex.slice(3, 5), 16);
    const b = parseInt(corHex.slice(5, 7), 16);
    const a = 1; // Defina o valor alpha conforme necessário (de 0 a 1)

    const corRGBA = `rgba(${r}, ${g}, ${b}, ${a})`;

    return corRGBA
  }

  return (
      <section className={styles.Content}>
        <ResetGroupCSSButtons />
        <form>
          <fieldset>
            <label htmlFor="width">width: {width}</label>
            <input 
              onChange={(e) => setWidth(`${e.target.value}px`)} 
              type="range" 
              name="width" 
              min={'1'}
              max={'30'}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="style">style: {style}</label>
            <select onChange={(e) => setStyle(`${e.target.value}`)}>
              <option value="solid">solid</option>
              <option value="hidden">hidden</option>
              <option value="dashed">dashed</option>
              <option value="dotted">dotted</option>
              <option value="double">double</option>
              <option value="groove">groove</option>
              <option value="ridge">ridge</option>
              <option value="inset">inset</option>
              <option value="outset">outset</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="color">color {color}</label>
            <input 
              onChange={(e) => setColor(`${e.target.value}px`)}
              type="color" 
              name="color" 
            />
          </fieldset>
        </form>
      </section>
  )
}