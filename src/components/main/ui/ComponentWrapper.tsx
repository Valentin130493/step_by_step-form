import { FC, PropsWithChildren } from "react";
import { Flex } from "antd";

export const ComponentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex vertical>
      <Flex style={{ width: "100%" }} vertical align={"center"}>
        {children}
      </Flex>
    </Flex>
  );
};
