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
import ChatInterface from "./pages/ChatInterface"
import { ChatContextProvider } from "./context_provider/ChatContextProvider";
import CreateChatRoom from "./components/CreateChatRoom";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 w-screen h-screen mx-0 font-sans" >
      <AuthContextProvider>
        <Toaster />
        <PostContextProvider>
          <ChatContextProvider>
          <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/post" element={<AddPost/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/friend" element={<Friend/>} />
            <Route path="/chat" element={<ChatInterface/>} />
            <Route path="/create-chat" element={<CreateChatRoom/>} />

            <Route path="*" element={<NotFound/>} />
          </Routes>
          </Layout>
          </ChatContextProvider>
        </PostContextProvider>
      </AuthContextProvider>

      </div>
    </BrowserRouter>
  );
}

export default App;
