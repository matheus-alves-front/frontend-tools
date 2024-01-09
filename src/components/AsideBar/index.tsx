'use client'
import Link from "next/link";
import styles from "./styles.module.scss"
import { RxShadowOuter, RxCorners, RxBorderTop, RxDashboard } from "react-icons/rx";

export function AsideBar() {
  return (
    <aside className={styles.Content}>
      <Link className={styles.Links} href={'/'}>
        <RxDashboard className={styles.Icon} />
        Home
      </Link>
      <label>CSS</label>
      <Link className={styles.Links} href={'/CSS/box-shadow'}>
        <RxShadowOuter className={styles.Icon} />
        Box Shadows
      </Link>
      <Link className={styles.Links} href={'/CSS/border'}>
        <RxCorners className={styles.Icon} />
        Borders
      </Link>
      <Link className={styles.Links} href={'/CSS/flex-box'}>
        <RxBorderTop className={styles.Icon} />
        FlexBox
      </Link>
      <label>JS</label>
      <Link className={styles.Links} href={'/JS/JSON-Generator'}>
        <RxBorderTop className={styles.Icon} />
        JSON Generator
      </Link>
    </aside>
  )
}