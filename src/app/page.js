"use client";

import useLoginForm from "@/hooks/useLoginForm";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";
import Redirect from "@/components/auth/Redirect";
import { authContainerCSS, authSubContainerCSS } from "@/constants/ui";

export default function Home() {
  const { formData, error, isLoading, handleInputChange, handleSubmit } =
    useLoginForm();

  return (
    <div className={authContainerCSS}>
      <div className={authSubContainerCSS}>
        <AuthHeader error={error} title={"Welcome Back"} />

        <AuthForm
          formData={formData}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          submitLabel="Login"
        />
        <Redirect
          title="Don't have an account? "
          subTitle="Sign up"
          href="/signup"
        />
      </div>
    </div>
  );
}
