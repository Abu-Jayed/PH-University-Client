import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      { path: "", element: <AdminDashboard></AdminDashboard> },
      { path: "create-student", element: <CreateStudent></CreateStudent> },
    ],
  },
  { path: "/login", element: <Login></Login> },
]);

export default router;
