import { AnyObject } from "antd/es/_util/type";

export function useSendData() {
  const sendData = async (values: AnyObject) => {
    try {
      await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${values.firstName} ${values.lastName}`,
        }),
      }).then((res) => res.json());
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  return {
    sendData,
  };
}
