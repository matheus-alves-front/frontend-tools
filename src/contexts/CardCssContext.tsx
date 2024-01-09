'use client'
import { ReactNode, createContext, useEffect, useState } from "react";

type CardCssContextProps = {
  boxShadow: string;
  border: string;
  borderRadius: string;
  UpdateBoxShadow: (boxShadow: string) => void;
  UpdateBorder: (border: string) => void;
  UpdateBorderRadius: (radius: string) => void;
  ResetBorder: () => void;
  ResetBoxShadow: () => void;
}

export const CardCssContext = createContext({} as CardCssContextProps)


export function CardCssContextProvider({children}: {
  children: ReactNode
}) {
  const [boxShadow, setBoxShadow] = useState("10px 10px 5px 0px rgba(238, 238, 238, 1)")
  const [border, setBorder] = useState("2px solid rgba(0, 0, 0, 1)")
  const [borderRadius, setBorderRadius] = useState('0px')

  function UpdateBoxShadow(boxShadowParam: string) {
    setBoxShadow(boxShadowParam)
  }

  function UpdateBorder(borderParam: string) {
    setBorder(borderParam)
  }

  function UpdateBorderRadius(borderRadiusParam: string) {
    setBorderRadius(borderRadiusParam)
  }

  function ResetBorder() {
    setBorder("2px solid rgba(0, 0, 0, 1)")
    setBorderRadius('0px')
  }

  function ResetBoxShadow() {
    setBoxShadow("10px 10px 5px 0px rgba(238, 238, 238, 1)")
  }

  return (
    <CardCssContext.Provider value={{
      boxShadow,
      border,
      borderRadius,
      UpdateBoxShadow,
      UpdateBorder,
      UpdateBorderRadius,
      ResetBorder,
      ResetBoxShadow,
    }}>
      {children}
    </CardCssContext.Provider>
  )
}