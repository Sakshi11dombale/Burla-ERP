import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import AdminLayout from "./modules/Admin_Page/dashboard/AdminLayout";

// Dashboard
import Dashboard from "./modules/Admin_Page/dashboard/Dashboard";

// Modules
import Student from "./modules/Admin_Page/student/Student";
import TeacherStaff from "./modules/Admin_Page/teacher/TeacherStaff";
import Academics from "./modules/Admin_Page/classAcadmecis/Academics";
import Admission from "./modules/Admin_Page/admission/Admission";
import FeesFinance from "./modules/Admin_Page/feesFinance/FeesFinance";
import Attendance from "./modules/Admin_Page/attendance/Attendance";
import Timetable from "./modules/Admin_Page/timetable/Timetable";
import DocumentVerification from "./modules/Admin_Page/document/DocumentVerification";
import Analytics from "./modules/Admin_Page/analytics/Analytics";

// System
import AdminProfile from "./modules/Admin_Page/profile/AdminProfile";
import Settings from "./modules/Admin_Page/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= ROOT ================= */}
        <Route
          path="/"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* /admin → /admin/dashboard */}
          <Route
            index
            element={<Navigate to="/admin/dashboard" replace />}
          />

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          {/* Student */}
          <Route
            path="students"
            element={<Student />}
          />

          {/* Teacher & Staff */}
          <Route
            path="teachers"
            element={<TeacherStaff />}
          />

          {/* Class & Academics */}
          <Route
            path="academics"
            element={<Academics />}
          />

          {/* Admission */}
          <Route
            path="admission"
            element={<Admission />}
          />

          {/* Fees & Finance */}
          <Route
            path="fees"
            element={<FeesFinance />}
          />

          {/* Attendance */}
          <Route
            path="attendance"
            element={<Attendance />}
          />

          {/* Timetable */}
          <Route
            path="timetable"
            element={<Timetable />}
          />

          {/* Document Verification */}
          <Route
            path="documents"
            element={<DocumentVerification />}
          />

          {/* Analytics */}
          <Route
            path="analytics"
            element={<Analytics />}
          />

          {/* Profile */}
          <Route
            path="profile"
            element={<AdminProfile />}
          />

          {/* Settings */}
          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

        {/* ================= FALLBACK ================= */}
        <Route
          path="*"
          element={<Navigate to="/admin/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;