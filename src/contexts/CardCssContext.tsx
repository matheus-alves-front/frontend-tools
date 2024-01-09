'use client'
import { ReactNode, createContext, useEffect, useState } from "react";

type CardCssContextProps = {
  boxShadow: string;
  UpdateBoxShadow: (boxShadow: string) => void;
  border: string;
  UpdateBorder: (border: string) => void;
  ResetBorder: () => void;
  ResetBoxShadow: () => void;
}

export const CardCssContext = createContext({} as CardCssContextProps)


export function CardCssContextProvider({children}: {
  children: ReactNode
}) {
  const [boxShadow, setBoxShadow] = useState("10px 10px 5px 0px rgba(238, 238, 238, 1)")
  const [border, setBorder] = useState("2px solid rgba(0, 0, 0, 1)")

  function UpdateBoxShadow(boxShadowParam: string) {
    setBoxShadow(boxShadowParam)
  }

  function UpdateBorder(borderParam: string) {
    setBorder(borderParam)
  }

  function ResetBorder() {
    setBorder("2px solid rgba(0, 0, 0, 1)")
  }

  function ResetBoxShadow() {
    setBoxShadow("10px 10px 5px 0px rgba(238, 238, 238, 1)")
  }

  return (
    <CardCssContext.Provider value={{
      boxShadow,
      border,
      UpdateBoxShadow,
      UpdateBorder,
      ResetBorder,
      ResetBoxShadow
    }}>
      {children}
    </CardCssContext.Provider>
  )
}