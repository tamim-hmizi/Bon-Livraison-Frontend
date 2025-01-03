import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import "./index.css";
import Dashboard from "./views/admin/Dashboard";
import Tables from "./views/admin/Tables";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Profile from "./views/Profile";
import Index from "./views/Index";
import UserBl from "./views/UserBl";
import ResponsableBl from "./views/ResponsableBl";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tables" element={<Tables />} />
        </Route>
        <Route path="/auth/*" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/bl" element={<UserBl />} />
        <Route path="/responsable/bl" element={<ResponsableBl />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
