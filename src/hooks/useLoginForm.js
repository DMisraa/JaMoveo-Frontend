import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { handleLogin } from "@/lib/db";

function useLoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      if (error) setError("");
    },
    [error]
  );

  const handleSubmit = useCallback(
    async (e) => {
      setIsLoading(true);
      e.preventDefault();
      setError("");

      const { username, password } = formData;

      let validationError = "";
      if (!username || !password) {
        validationError = "Username and password are required.";
      }

      if (validationError) {
        setError(validationError);
        setIsLoading(false);
        return;
      }

      try {
        const data = await handleLogin(username, password);
        console.log('data login form:', data)
        console.log(data.token, ' data token')

        if (data && data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data));
          console.log('user logged in:', data)
          setIsLoading(false);
          router.push(data.admin ? "/adminMainPage" : "/playerMainPage");
          return;
        } else {
          setError("Invalid username or password.");
          setIsLoading(false);
        }
      } catch (err) {
        setError("Login failed.");
        setIsLoading(false);
        console.log('Error message:', err)
      }
    },
    [formData, router]
  );

  return {
    formData,
    error,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
}

export default useLoginForm;
