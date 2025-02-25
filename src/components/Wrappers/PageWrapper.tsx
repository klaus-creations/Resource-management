"use client";

import React from "react";
import { Provider } from "react-redux";

import store from "@/features/store";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Provider store={store}>
      <div className="w-full h-[100vh] overflow-hidden flex flex-col">
        {children}
      </div>
    </Provider>
  );
}
