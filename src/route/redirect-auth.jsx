import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";
import { appRoutes } from "../utils";
const RedirectAuth = () => {
  const {
    state: { token },
  } = useAuth();
  const location = useLocation();
  return token ? (
    <Navigate to={appRoutes.home} state={{ from: location }} replace={true} />
  ) : (
    <Outlet />
  );
};

export { RedirectAuth };
