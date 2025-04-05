"use client";

import InstrumentDropdown from "@/components/auth/InstrumentDropdown";
import InputForm from "@/components/ui/InputForm";
import SubmitButton from "@/components/ui/SubmitButton";

function AuthForm({
  formData,
  isLoading,
  handleInputChange,
  handleSubmit,
  submitLabel,
  registation,
}) {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Username Input */}
      <InputForm
        type="text"
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Enter your username"
        disabled={isLoading}
      />

      {/* Password Input */}
      <InputForm
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        disabled={isLoading}
      />
      {registation && (
        <InstrumentDropdown
          label={"Instrument"}
          name="instrument"
          value={formData.instrument}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      )}
      {/* Instrument Dropdown */}

      {/* Register Button */}
      <SubmitButton label={isLoading ? "Submitting.." : submitLabel} />
    </form>
  );
}

export default AuthForm;
