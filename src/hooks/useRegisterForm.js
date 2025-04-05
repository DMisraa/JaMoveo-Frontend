import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { handleSignup } from "@/lib/db"; 

  function useRegisterForm({
  initialState = { username: '', password: '', instrument: '' },
  isUserAdmin = false,
  redirectPath,
  validateFunction
}) {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    if (error) setError('');
  }, [error]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const { username, password, instrument } = formData;

    let validationError = '';
    if (!username || !password || !instrument) {
      validationError = "All fields are required.";
    }

    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const data = await handleSignup(username, password, instrument, isUserAdmin);

      if (data && data.newUser) {
        localStorage.setItem("user", JSON.stringify(data.newUser));
        console.log('user registered:', data.newUser)
        router.push(redirectPath);
      } 
    } catch (err) {
      console.error('Submission Error:', err);
      setError(err.message || "Operation failed, please try again.");
      setIsLoading(false);
    }
  }, [formData, isUserAdmin, redirectPath, router, validateFunction]);

  return {
    formData,
    error,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
}

export default useRegisterForm