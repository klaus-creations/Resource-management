import Greeting from "@/components/admin-dashboard./Greeting";
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="size-full overflow-y-auto flex flex-col gap-4">
      <Greeting name="Cristiano Ronaldo" />
    </div>
  );
}
