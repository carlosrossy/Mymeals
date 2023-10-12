import React, { useEffect, useState } from "react";
import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "./app.routes";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuth } from "../hook/auth";

export default function Routes() {
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const { User } = useAuth();

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(setUser);

  //   return subscriber;
  // }, []);

  return User ? <AppRoutes /> : <AuthRoutes />;
}
