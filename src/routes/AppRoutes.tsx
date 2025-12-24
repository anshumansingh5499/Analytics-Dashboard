import { Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import AnalyticsPage from "../pages/AnalyticsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/users" element={<UsersPage />} />
      <Route
        path="/users/:id"
        element={<UserDetailsPage />}
      />
      <Route
        path="/analytics"
        element={<AnalyticsPage />}
      />
    </Routes>
  );
}
