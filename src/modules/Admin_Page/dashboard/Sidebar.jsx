import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  IndianRupee,
  ClipboardCheck,
  CalendarDays,
  FileCheck,
  BarChart3,
  UserCircle,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Student",
    path: "/admin/students",
    icon: Users,
  },
  {
    name: "Teacher & Staff",
    path: "/admin/teachers",
    icon: GraduationCap,
  },
  {
    name: "Class & Academics",
    path: "/admin/academics",
    icon: BookOpen,
  },
  {
    name: "Admission",
    path: "/admin/admission",
    icon: FileText,
  },
  {
    name: "Fees & Finance",
    path: "/admin/fees",
    icon: IndianRupee,
  },
  {
    name: "Attendance",
    path: "/admin/attendance",
    icon: ClipboardCheck,
  },
  {
    name: "Timetable",
    path: "/admin/timetable",
    icon: CalendarDays,
  },
  {
    name: "Document Verification",
    path: "/admin/documents",
    icon: FileCheck,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: BarChart3,
  },
];

const systemItems = [
  {
    name: "Profile",
    path: "/admin/profile",
    icon: UserCircle,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 w-64 h-screen bg-blue-900 border-r border-gray-200">

      {/* Header */}
      <div className="h-30 flex items-center px-5 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-bold text-white">
            BURLA INSTITUTE
          </h1>

          <p className="text-xs text-white pt-3">
            College Administration
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4">

        {/* MAIN */}
        <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
          Main
        </p>

        <nav className="space-y-1">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-white hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}

        </nav>

        {/* SYSTEM */}
        <div className="mt-8">

          <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
            System
          </p>

          <nav className="space-y-1">

            {systemItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-white hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}

          </nav>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;