import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const departmentData = [
  { name: "AI & DS", students: 650 },
  { name: "CSE", students: 820 },
  { name: "IT", students: 580 },
  { name: "ECE", students: 620 },
  { name: "ME", students: 650 },
];

const applicationData = [
  { name: "Approved", value: 400 },
  { name: "Pending", value: 70 },
  { name: "Rejected", value: 30 },
];

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

function DashboardCharts() {
  return (
    <div className="space-y-6">

      {/* First Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Students by Department */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-w-0">

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Students by Department
            </h2>

            <p className="text-sm text-gray-500">
              Student distribution across departments
            </p>
          </div>

          <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="students"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/* Applications by Status */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-w-0">

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Applications by Status
            </h2>

            <p className="text-sm text-gray-500">
              Current admission application status
            </p>
          </div>

          <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={applicationData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius="65%"
                  innerRadius="40%"
                  paddingAngle={3}
                  label
                >
                  {applicationData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                />

              </PieChart>
            </ResponsiveContainer>

          </div>
        </div>

      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Academic Year */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-w-0">

          <h2 className="text-lg font-semibold text-gray-800">
            Students by Academic Year
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Student enrollment trend
          </p>

          <div className="w-full h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { year: "2022-23", students: 720 },
                  { year: "2023-24", students: 810 },
                  { year: "2024-25", students: 890 },
                  { year: "2025-26", students: 950 },
                  { year: "2026-27", students: 1000 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="year" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="students"
                  fill="#6366f1"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Admission Trend */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-w-0">

          <h2 className="text-lg font-semibold text-gray-800">
            Admissions by Academic Year
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Admission trends
          </p>

          <div className="w-full h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { year: "2022-23", admissions: 320 },
                  { year: "2023-24", admissions: 380 },
                  { year: "2024-25", admissions: 420 },
                  { year: "2025-26", admissions: 460 },
                  { year: "2026-27", admissions: 500 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="year" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="admissions"
                  fill="#22c55e"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCharts;