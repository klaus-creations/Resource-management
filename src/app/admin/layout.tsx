import CustomSidebar from "@/components/sidebars/CustomSidebar";
import AdminWrapper from "@/components/Wrappers/AdminWrapper";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}
export default function Adminlayout({ children }: AdminLayoutProps) {
  return (
    <AdminWrapper>
      <CustomSidebar />
      <div className="size-full absolute left-5 top-5">{children}</div>
    </AdminWrapper>
  );
}
