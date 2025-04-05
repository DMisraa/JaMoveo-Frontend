"use client";

import AuthHeader from "@/components/auth/AuthHeader";
import Redirect from "@/components/auth/Redirect";
import  useRegisterForm  from "@/hooks/useRegisterForm";
import AuthForm from "@/components/auth/AuthForm";
import { authContainerCSS, authSubContainerCSS } from "@/constants/ui";

export default function AdminSignup() {
  const { formData, error, isLoading, handleInputChange, handleSubmit } =
    useRegisterForm({
      isUserAdmin: true,
      redirectPath: "/adminMainPage",
    });

  return (
    <div className={authContainerCSS}>
      <div className={authSubContainerCSS}>
        <AuthHeader
          error={error}
          title={"Admin Registration"}
          subTitle={"Welcome! Please register to manage the admin dashboard."}
        />

        <AuthForm
          formData={formData}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          submitLabel="Register as Admin"
          registation={true}
        />

        <Redirect title="Already an Admin? " subTitle="Login here" href="/" />
      </div>
    </div>
  );
}
