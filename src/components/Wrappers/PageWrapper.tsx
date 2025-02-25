import React from "react";
import { Provider } from "react-redux";

import store from "@/features/store";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Provider store={store}>
      <div className="w-full flex flex-col">
        common
        <main className="flex-grow">{children}</main>
      </div>
    </Provider>
  );
}
