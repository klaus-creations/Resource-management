import SignIn from "@/components/AuthComponents/SignIn";
import AuthWrapper from "@/components/Wrappers/AuthWrapper";
import React from "react";

export default function SignInPage() {
  return (
    <AuthWrapper>
      <SignIn />
    </AuthWrapper>
  );
}
