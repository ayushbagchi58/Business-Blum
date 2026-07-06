"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useEffect } from "react";
import { hydrate } from "@/store/slices/authSlice";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hydrate auth state from localStorage on mount
    store.dispatch(hydrate());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
