import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context_provider/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import { PostContextProvider } from "./context_provider/PostContextProvider";
import { ChatContextProvider } from "./context_provider/ChatContextProvider";
import Layout from "./components/Layout";
import { LoadingComponent } from "./components/Loading";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const AddPost = lazy(() => import("./pages/AddPost"));
const Profile = lazy(() => import("./pages/Profile"));
const Friend = lazy(() => import("./pages/Friend"));
const ChatInterface = lazy(() => import("./pages/ChatInterface"));
const CreateChatRoom = lazy(() => import("./components/CreateChatRoom"));
const ExpandedPostModel = lazy(() => import("./components/ExpandedPostModel"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 w-screen h-screen mx-0 font-sans">
        <AuthContextProvider>
          <Toaster />
          <PostContextProvider>
            <ChatContextProvider>
              <Suspense fallback={<LoadingComponent />}>
                <Layout>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        
                          <HomePage />
                       
                      }
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/post" element={<AddPost />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/friend" element={<Friend />} />
                    <Route path="/chat" element={<ChatInterface />} />
                    <Route path="/create-chat" element={<CreateChatRoom />} />
                    <Route path="/view-post" element={<ExpandedPostModel />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </Suspense>
            </ChatContextProvider>
          </PostContextProvider>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
