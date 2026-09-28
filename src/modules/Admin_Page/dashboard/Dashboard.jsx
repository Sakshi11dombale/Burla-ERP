import KPICards from "./KPICards";
import DashboardCharts from "./DashboardCharts";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          College ERP overview and statistics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="w-full">
        <KPICards />
      </div>

      {/* Charts */}
      <div className="mt-6 w-full">
        <DashboardCharts />
      </div>

    </div>
  );
}

export default Dashboard;