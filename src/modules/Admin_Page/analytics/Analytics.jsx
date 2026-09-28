import { useMemo, useState } from "react";
import {
  BarChart3,
  Users,
  ClipboardCheck,
  GraduationCap,
  IndianRupee,
  FileText,
  TrendingUp,
  RotateCcw,
} from "lucide-react";

function Analytics() {
  const [academicYear, setAcademicYear] = useState("2026-27");
  const [department, setDepartment] = useState("All Departments");
  const [analyticsType, setAnalyticsType] = useState("Overall Analytics");

  const analyticsData = [
    {
      department: "AI & DS",
      students: 620,
      attendance: 86,
      passPercentage: 91,
      fees: 4850000,
      applications: 245,
      placement: 88,
    },
    {
      department: "Computer Science",
      students: 780,
      attendance: 89,
      passPercentage: 94,
      fees: 6200000,
      applications: 310,
      placement: 92,
    },
    {
      department: "Information Technology",
      students: 650,
      attendance: 84,
      passPercentage: 89,
      fees: 5100000,
      applications: 275,
      placement: 86,
    },
    {
      department: "Electronics",
      students: 590,
      attendance: 82,
      passPercentage: 87,
      fees: 4700000,
      applications: 220,
      placement: 81,
    },
    {
      department: "Mechanical",
      students: 605,
      attendance: 80,
      passPercentage: 85,
      fees: 4550000,
      applications: 200,
      placement: 78,
    },
  ];

  const filteredData = useMemo(() => {
    if (department === "All Departments") {
      return analyticsData;
    }

    return analyticsData.filter(
      (item) => item.department === department
    );
  }, [department]);

  const totalStudents = filteredData.reduce(
    (sum, item) => sum + item.students,
    0
  );

  const averageAttendance =
    filteredData.reduce((sum, item) => sum + item.attendance, 0) /
    filteredData.length;

  const averagePassPercentage =
    filteredData.reduce(
      (sum, item) => sum + item.passPercentage,
      0
    ) / filteredData.length;

  const totalFees = filteredData.reduce(
    (sum, item) => sum + item.fees,
    0
  );

  const totalApplications = filteredData.reduce(
    (sum, item) => sum + item.applications,
    0
  );

  const averagePlacement =
    filteredData.reduce((sum, item) => sum + item.placement, 0) /
    filteredData.length;

  const resetFilters = () => {
    setAcademicYear("2026-27");
    setDepartment("All Departments");
    setAnalyticsType("Overall Analytics");
  };

  return (
    <div className="p-6 space-y-6 ">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Analytics & Reports
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Analyze student, academic, attendance, admission and financial
          performance.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-5">

        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-800">
            Analytics Filters
          </h2>

          <button
            onClick={resetFilters}
            className="flex items-center gap-2 px-3 py-2 text-sm
                       border rounded-lg hover:bg-gray-50"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Academic Year */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Academic Year
            </label>

            <select
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>2026-27</option>
              <option>2025-26</option>
              <option>2024-25</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Department
            </label>

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>All Departments</option>
              <option>AI & DS</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronics</option>
              <option>Mechanical</option>
            </select>
          </div>

          {/* Analytics Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Analytics Type
            </label>

            <select
              value={analyticsType}
              onChange={(e) => setAnalyticsType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>Overall Analytics</option>
              <option>Student Analytics</option>
              <option>Academic Analytics</option>
              <option>Attendance Analytics</option>
              <option>Admission Analytics</option>
              <option>Fee Analytics</option>
              <option>Placement Analytics</option>
            </select>
          </div>

        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

        <KPICard
          title="Total Students"
          value={totalStudents.toLocaleString()}
          icon={<Users size={22} />}
        />

        <KPICard
          title="Avg Attendance"
          value={`${averageAttendance.toFixed(1)}%`}
          icon={<ClipboardCheck size={22} />}
        />

        <KPICard
          title="Pass Percentage"
          value={`${averagePassPercentage.toFixed(1)}%`}
          icon={<GraduationCap size={22} />}
        />

        <KPICard
          title="Fee Collection"
          value={`₹${(totalFees / 10000000).toFixed(2)} Cr`}
          icon={<IndianRupee size={22} />}
        />

        <KPICard
          title="Applications"
          value={totalApplications.toLocaleString()}
          icon={<FileText size={22} />}
        />

        <KPICard
          title="Placement Rate"
          value={`${averagePlacement.toFixed(1)}%`}
          icon={<TrendingUp size={22} />}
        />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Students by Department */}
        <ChartCard title="Students by Department">

          <div className="space-y-4">

            {filteredData.map((item) => (
              <div key={item.department}>

                <div className="flex justify-between text-sm mb-1">
                  <span>{item.department}</span>
                  <span className="font-semibold">
                    {item.students}
                  </span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3">

                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{
                      width: `${Math.min(
                        (item.students / 800) * 100,
                        100
                      )}%`,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </ChartCard>

        {/* Attendance */}
        <ChartCard title="Attendance Performance">

          <div className="space-y-4">

            {filteredData.map((item) => (
              <div key={item.department}>

                <div className="flex justify-between text-sm mb-1">
                  <span>{item.department}</span>

                  <span className="font-semibold">
                    {item.attendance}%
                  </span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3">

                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${item.attendance}%`,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </ChartCard>

      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Academic Performance */}
        <ChartCard title="Academic Performance">

          <div className="space-y-5">

            {filteredData.map((item) => (
              <div key={item.department}>

                <div className="flex justify-between mb-2 text-sm">
                  <span>{item.department}</span>

                  <span className="font-semibold">
                    {item.passPercentage}%
                  </span>
                </div>

                <div className="grid grid-cols-10 gap-1">

                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className={`h-8 rounded ${
                        index <
                        Math.round(item.passPercentage / 10)
                          ? "bg-blue-500"
                          : "bg-gray-100"
                      }`}
                    />
                  ))}

                </div>

              </div>
            ))}

          </div>

        </ChartCard>

        {/* Placement */}
        <ChartCard title="Placement Performance">

          <div className="space-y-4">

            {filteredData.map((item) => (
              <div
                key={item.department}
                className="flex items-center gap-4"
              >

                <div className="w-36 text-sm">
                  {item.department}
                </div>

                <div className="flex-1 bg-gray-100 rounded-full h-4">

                  <div
                    className="bg-purple-500 h-4 rounded-full"
                    style={{
                      width: `${item.placement}%`,
                    }}
                  />

                </div>

                <div className="w-12 text-sm font-semibold">
                  {item.placement}%
                </div>

              </div>
            ))}

          </div>

        </ChartCard>

      </div>

      {/* Department Analytics Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

        <div className="p-5 border-b">

          <div className="flex items-center gap-2">
            <BarChart3 size={20} />
            <h2 className="font-semibold text-gray-800">
              Department-wise Analytics
            </h2>
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50">

              <tr>
                <th className="text-left px-5 py-3">Department</th>
                <th className="text-center px-5 py-3">
                  Students
                </th>
                <th className="text-center px-5 py-3">
                  Attendance
                </th>
                <th className="text-center px-5 py-3">
                  Pass %
                </th>
                <th className="text-center px-5 py-3">
                  Applications
                </th>
                <th className="text-center px-5 py-3">
                  Placement
                </th>
                <th className="text-right px-5 py-3">
                  Fee Collection
                </th>
              </tr>

            </thead>

            <tbody>

              {filteredData.map((item) => (
                <tr
                  key={item.department}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="px-5 py-4 font-medium">
                    {item.department}
                  </td>

                  <td className="px-5 py-4 text-center">
                    {item.students}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span className="px-2 py-1 rounded-full bg-green-50 text-green-700">
                      {item.attendance}%
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    {item.passPercentage}%
                  </td>

                  <td className="px-5 py-4 text-center">
                    {item.applications}
                  </td>

                  <td className="px-5 py-4 text-center">
                    {item.placement}%
                  </td>

                  <td className="px-5 py-4 text-right font-medium">
                    ₹{(item.fees / 100000).toFixed(1)} L
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

/* KPI CARD */

function KPICard({ title, value, icon }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-1">
            {value}
          </h3>
        </div>

        <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>

      </div>

    </div>
  );
}

/* CHART CARD */

function ChartCard({ title, children }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <h2 className="font-semibold text-gray-800 mb-5">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default Analytics;