'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "@/components/Menu";
import { MenuItem } from "@/components/MenuItem";
import Link from "next/link";
import TextInput from "./TextInput/textInput";
import CheckBox from "./CheckBox/CheckBox";
import Todo from "./Todo/todo";

export default function Home() {
  return (
    <>
    {/* <Button disabled={false} mode="fill"   />
    <TextInput />
    <CheckBox /> */}
    <Todo />
    </>
  );
}