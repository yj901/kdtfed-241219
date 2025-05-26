import { ReactNode } from "react";
import Link from "next/link";
import styled from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styled.container}>
      <header className={styled.header}>
        <Link href={"/"}>📖ONEBITE BOOKS</Link>
      </header>
      <main className={styled.main}>{children}</main>
      <footer className={styled.footer}>제작 @JIN</footer>
    </div>
  );
};

export default GlobalLayout;
