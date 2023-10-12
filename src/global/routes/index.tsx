import React from "react";
import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../hook/auth";

export default function Routes() {
  const { User } = useAuth();

  return User ? <AppRoutes /> : <AuthRoutes />;
}
