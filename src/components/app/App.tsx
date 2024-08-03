import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES_OBJECT } from "../../pages";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "../../store";

const router = createBrowserRouter(ROUTES_OBJECT);

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "#fff",
        },
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
};
