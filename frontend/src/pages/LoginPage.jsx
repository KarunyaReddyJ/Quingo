import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../services/authServices";
import toast from "react-hot-toast";
import { userDetailInLocalstorage } from "../constants/constants";
import Button from "../utils/Button";
import Input from "../utils/Input";
const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { setUserDetails } = useAuth();
  const navigate = useNavigate();
  const handleTyping = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(input);
    if (data) {
      // console.table(data)
      setUserDetails(data);
      localStorage.setItem(userDetailInLocalstorage, JSON.stringify(data));
      toast.success("login successful");
      navigate("/");
    } else {
      toast.error("login unsuccessful");
    }
  };
  return(  <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-4 max-w-md mx-auto mt-16 bg-white shadow-md p-8 rounded-xl"
>
  <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome Back</h2>

  <input
    type="email"
    name="email"
    value={input.email}
    onChange={handleTyping}
    placeholder="Email"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    required
  />

  <input
    type="password"
    name="password"
    value={input.password}
    onChange={handleTyping}
    placeholder="Password"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    required
  />

  <button
    type="submit"
    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition"
  >
    Log In
  </button>

  <p className="text-sm text-center text-gray-600">
    Don't have an account?{" "}
    <Link to="/signup" className="text-indigo-500 hover:underline">
      Sign up
    </Link>
  </p>
</form>
);
};

export default LoginPage;
