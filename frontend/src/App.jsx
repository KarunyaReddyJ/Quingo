import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthContextProvider } from "./context_provider/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import { PostContextProvider } from "./context_provider/PostContextProvider";
import Layout from "./components/Layout";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";
import Friend from "./pages/Friend";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Toaster />
        <PostContextProvider>
          <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/post" element={<AddPost/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/friend" element={<Friend/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </Layout>
        </PostContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
