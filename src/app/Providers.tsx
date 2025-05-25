"use client";

import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
