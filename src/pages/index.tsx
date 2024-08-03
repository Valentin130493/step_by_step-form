import { RouteObject } from "react-router-dom";
import { ROUTES } from "../routes";
import MainLayout from "../components/layout/MainLayout.tsx";

import ErrorPage from "./errorPage";
import UserInfoStep from "./userInfoStep";

import JobInfoStep from "./job";
import CreditInfoStep from "./credit";

export const ROUTES_OBJECT: RouteObject[] = [
  {
    Component: MainLayout,
    children: [
      {
        path: ROUTES.userInfoStep,
        Component: UserInfoStep,
      },
      {
        path: ROUTES.jobStep,
        Component: JobInfoStep,
      },
      {
        path: ROUTES.creditStep,
        Component: CreditInfoStep,
      },
    ],
  },

  {
    Component: ErrorPage,
    path: ROUTES.notFount,
  },
];
