'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

function Home() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  async function handleLogin(event) {
    setIsLoading(true)
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log('data:', data)

      if (!res.ok) {
        setIsLoading(false)
        setError(data.error || "Login failed");
        return;
      }
      
      localStorage.setItem("token", data.token); // Store JWT
      localStorage.setItem('user', JSON.stringify(data))
      setIsLoading(false)
      router.push(data.admin ? "/adminMainPage" : "/playerMainPage"); // Redirect
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-900 px-4 pb-0">
      <div className="absolute top-1/6 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Username</label>
            <input name="username" type="text" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input name="password" type="password" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
           {isLoading ? 'Logging In..' : 'Login' } 
          </button>
        </form>

        <p className="text-gray-400 text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
