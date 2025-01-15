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
  return (
    <form style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      <Input
        type="email"
        name="email"
        value={input.email}
        onChange={handleTyping}
        placeholder="email"
      />{" "}
      <br />
      <Input
        type="password"
        name="password"
        value={input.password}
        onChange={handleTyping}
        placeholder="pass***d"
      />{" "}
      <br />
      <Button text={"login"} onChange={handleSubmit} /> <br />
      <Link to="/signup"> {"Don't Have Account"} </Link>
    </form>
  );
};

export default LoginPage;
