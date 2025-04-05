"use client";

import AuthHeader from "@/components/auth/AuthHeader";
import Redirect from "@/components/auth/Redirect";
import useRegisterForm  from "@/hooks/useRegisterForm";
import AuthForm from "@/components/auth/AuthForm";
import { authContainerCSS, authSubContainerCSS } from "@/constants/ui";

export default function userSignup() {
  const { formData, error, isLoading, handleInputChange, handleSubmit } =
    useRegisterForm({
      isUserAdmin: false,
      redirectPath: "/playerMainPage",
    });

  return (
    <div className={authContainerCSS}>
      <div className={authSubContainerCSS}>
        <AuthHeader
          error={error}
          title={"User Registration"}
          subTitle={"Welcome! Please register to join the band rehearsal."}
        />

        <AuthForm
          formData={formData}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          submitLabel="Register"
          registation={true}
        />

        <Redirect title="Already a user? " subTitle="Login here" href="/" />
      </div>
    </div>
  );
}
