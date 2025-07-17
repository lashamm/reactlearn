import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "@/components/Menu";
import { MenuItem } from "@/components/MenuItem";
import Link from "next/link";

export default function Home() {
  const Text = 'Click me'
  return (
    <>
    <h1 className={styles.back}>
      <Link href="/aboutus">{Text}</Link>
    </h1>

    <Menu />
    </>
  );
}
