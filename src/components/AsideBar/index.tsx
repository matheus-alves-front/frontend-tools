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
      <Link className={styles.Links} href={'/CSS/box-shadow'}>
        <RxShadowOuter className={styles.Icon} />
        Box Shadow
      </Link>
      <Link className={styles.Links} href={'/CSS/border'}>
        <RxCorners className={styles.Icon} />
        Border Radius
      </Link>
      <Link className={styles.Links} href={'/CSS/flex-box'}>
        <RxBorderTop className={styles.Icon} />
        FlexBox
      </Link>
    </aside>
  )
}