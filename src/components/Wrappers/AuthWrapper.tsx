import Image from "next/image";
import React from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
}
export default function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className="w-full h-full flex items-center justify-between">
      {children}
      <Right />
    </div>
  );
}

const Right = function () {
  return (
    <div className="w-[50%] h-full relative">
      <Image
        src="/auth-side1.jpg"
        className="size-full object-cover"
        alt="auth side"
        width={1000}
        height={1000}
      />

      <div className="size-full flex items-center justify-center text-center absolute inset-0 bg-gradient-to-br from-indigo-800/[.5] to-black/[.9]">
        <h3 className="text-5xl font-extrabold uppercase font-serif tracking-[2px] text-white w-[80%] leading-[2]">
          Welcome To Our University&apos;s Resource Management System
        </h3>
      </div>
    </div>
  );
};
