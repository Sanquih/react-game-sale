import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <div>{children ?? <Outlet />}</div>
    </div>
  );
}

export default Layout;
