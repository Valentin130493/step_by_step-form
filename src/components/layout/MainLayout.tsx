import { FC } from "react";
import { Layout as BaseLayout } from "antd";

import { Outlet } from "react-router";
import { Header } from "./Header.tsx";

const MainLayout: FC = () => {
  return (
    <BaseLayout style={{ minHeight: "100vh", minWidth: "100%" }}>
      <Header />
      <Outlet />
    </BaseLayout>
  );
};

export default MainLayout;
