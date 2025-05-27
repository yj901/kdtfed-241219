import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>임시 서치바</div>
      {children}
    </>
  );
};

export default Layout;
