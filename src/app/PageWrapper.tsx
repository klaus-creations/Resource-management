import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-full flex flex-col">
      common
      <main className="flex-grow">{children}</main>
    </div>
  );
}
