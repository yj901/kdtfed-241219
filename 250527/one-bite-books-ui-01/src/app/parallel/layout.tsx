import { ReactNode } from "react";
import Link from "next/link";

const Layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href={"/parallel"}>parallel</Link>
        &nbsp;
        <Link href={"/parallel/setting"}>parallel/setting</Link>
      </div>
      <br />
      <div>
        {sidebar}
        {children}
        {feed}
      </div>
    </div>
  );
};

export default Layout;
