import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "@/components/Menu";
import { MenuItem } from "@/components/MenuItem";

export default function Home() {
  const Link ='https://www.amazon.com/'
  const Text = 'Click me'
  return (
    <>
    <h1 className={styles.back}>
      <a href={Link}>{Text}</a>
    </h1>

    <Menu />
    </>
  );
}
