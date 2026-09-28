import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";

function Attendance() {
  // =========================================================
  // FILTER STATES
  // =========================================================

  const [academicYear, setAcademicYear] = useState("2026-27");
  const [department, setDepartment] = useState("All Departments");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [division, setDivision] = useState("All Divisions");

  const [attendanceView, setAttendanceView] =
    useState("Overall Attendance");

  // =========================================================
  // SAMPLE ATTENDANCE DATA
  // Replace this later with API/database data
  // =========================================================

  const attendanceData = [
    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "FE",
      division: "A",
      students: 62,
      presentToday: 57,
      absentToday: 5,
      average: 91.2,
    },
    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "FE",
      division: "B",
      students: 60,
      presentToday: 53,
      absentToday: 7,
      average: 88.7,
    },
    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "SE",
      division: "A",
      students: 58,
      presentToday: 49,
      absentToday: 9,
      average: 85.4,
    },
    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "TE",
      division: "A",
      students: 55,
      presentToday: 45,
      absentToday: 10,
      average: 82.6,
    },
    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "BE",
      division: "A",
      students: 52,
      presentToday: 42,
      absentToday: 10,
      average: 79.8,
    },
    {
      academicYear: "2026-27",
      department: "Computer Science",
      className: "FE",
      division: "A",
      students: 65,
      presentToday: 60,
      absentToday: 5,
      average: 92.1,
    },
    {
      academicYear: "2026-27",
      department: "Computer Science",
      className: "SE",
      division: "A",
      students: 61,
      presentToday: 53,
      absentToday: 8,
      average: 87.3,
    },
    {
      academicYear: "2026-27",
      department: "Computer Science",
      className: "TE",
      division: "B",
      students: 58,
      presentToday: 47,
      absentToday: 11,
      average: 81.5,
    },
    {
      academicYear: "2026-27",
      department: "Information Technology",
      className: "FE",
      division: "A",
      students: 60,
      presentToday: 54,
      absentToday: 6,
      average: 89.4,
    },
    {
      academicYear: "2026-27",
      department: "Information Technology",
      className: "TE",
      division: "A",
      students: 57,
      presentToday: 47,
      absentToday: 10,
      average: 83.2,
    },
  ];

  // =========================================================
  // STUDENT DATA
  // =========================================================

  const studentAttendance = [
    {
      name: "Aarav Patil",
      prn: "2023012345",
      department: "AI & DS",
      className: "TE",
      division: "A",
      present: 82,
      absent: 8,
      percentage: 91.1,
    },
    {
      name: "Sneha Joshi",
      prn: "2023012346",
      department: "AI & DS",
      className: "TE",
      division: "A",
      present: 78,
      absent: 12,
      percentage: 86.7,
    },
    {
      name: "Rahul Shinde",
      prn: "2023012347",
      department: "AI & DS",
      className: "TE",
      division: "A",
      present: 68,
      absent: 22,
      percentage: 75.6,
    },
    {
      name: "Priya Deshmukh",
      prn: "2023012348",
      department: "AI & DS",
      className: "TE",
      division: "A",
      present: 58,
      absent: 32,
      percentage: 64.4,
    },
    {
      name: "Rohan Kulkarni",
      prn: "2023012349",
      department: "AI & DS",
      className: "SE",
      division: "A",
      present: 76,
      absent: 14,
      percentage: 84.4,
    },
    {
      name: "Ananya More",
      prn: "2023012350",
      department: "AI & DS",
      className: "FE",
      division: "B",
      present: 84,
      absent: 6,
      percentage: 93.3,
    },
    {
      name: "Aditya Pawar",
      prn: "2023012351",
      department: "Computer Science",
      className: "SE",
      division: "A",
      present: 80,
      absent: 10,
      percentage: 88.9,
    },
    {
      name: "Neha Jadhav",
      prn: "2023012352",
      department: "Computer Science",
      className: "TE",
      division: "B",
      present: 65,
      absent: 25,
      percentage: 72.2,
    },
    {
      name: "Omkar Joshi",
      prn: "2023012353",
      department: "Information Technology",
      className: "TE",
      division: "A",
      present: 77,
      absent: 13,
      percentage: 85.6,
    },
  ];

  // =========================================================
  // FILTER CLASS-WISE DATA
  // =========================================================

  const filteredClassData = useMemo(() => {
    return attendanceData.filter((item) => {
      const yearMatch =
        item.academicYear === academicYear;

      const departmentMatch =
        department === "All Departments" ||
        item.department === department;

      const classMatch =
        selectedClass === "All Classes" ||
        item.className === selectedClass;

      const divisionMatch =
        division === "All Divisions" ||
        item.division === division;

      return (
        yearMatch &&
        departmentMatch &&
        classMatch &&
        divisionMatch
      );
    });
  }, [
    academicYear,
    department,
    selectedClass,
    division,
  ]);

  // =========================================================
  // FILTER STUDENT DATA
  // =========================================================

  const filteredStudentData = useMemo(() => {
    return studentAttendance.filter((student) => {
      const departmentMatch =
        department === "All Departments" ||
        student.department === department;

      const classMatch =
        selectedClass === "All Classes" ||
        student.className === selectedClass;

      const divisionMatch =
        division === "All Divisions" ||
        student.division === division;

      return (
        departmentMatch &&
        classMatch &&
        divisionMatch
      );
    });
  }, [
    department,
    selectedClass,
    division,
  ]);

  // =========================================================
  // OVERALL ATTENDANCE CALCULATION
  // =========================================================

  const overallAverage = useMemo(() => {
    if (filteredClassData.length === 0) {
      return 0;
    }

    const total = filteredClassData.reduce(
      (sum, item) => sum + item.average,
      0
    );

    return total / filteredClassData.length;
  }, [filteredClassData]);

  // =========================================================
  // TOTAL STUDENTS
  // =========================================================

  const totalStudents = useMemo(() => {
    return filteredClassData.reduce(
      (sum, item) => sum + item.students,
      0
    );
  }, [filteredClassData]);

  // =========================================================
  // PRESENT TODAY
  // =========================================================

  const presentToday = useMemo(() => {
    return filteredClassData.reduce(
      (sum, item) => sum + item.presentToday,
      0
    );
  }, [filteredClassData]);

  // =========================================================
  // ABSENT TODAY
  // =========================================================

  const absentToday = useMemo(() => {
    return filteredClassData.reduce(
      (sum, item) => sum + item.absentToday,
      0
    );
  }, [filteredClassData]);

  // =========================================================
  // RESET FILTERS
  // =========================================================

  const resetFilters = () => {
    setAcademicYear("2026-27");
    setDepartment("All Departments");
    setSelectedClass("All Classes");
    setDivision("All Divisions");
    setAttendanceView("Overall Attendance");
  };

  // =========================================================
  // KPI CARDS
  // =========================================================

  const attendanceCards = [
    {
      title: "Overall Attendance",
      value: `${overallAverage.toFixed(1)}%`,
      icon: TrendingUp,
      description: "Average attendance",
    },
    {
      title: "Total Students",
      value: totalStudents,
      icon: Users,
      description: "Students in selection",
    },
    {
      title: "Present Today",
      value: presentToday,
      icon: UserCheck,
      description: "Students present",
    },
    {
      title: "Absent Today",
      value: absentToday,
      icon: UserX,
      description: "Students absent",
    },
    {
      title: "Above 75%",
      value: filteredStudentData.filter(
        (student) => student.percentage >= 75
      ).length,
      icon: ClipboardCheck,
      description: "Students eligible",
    },
    {
      title: "Below 75%",
      value: filteredStudentData.filter(
        (student) => student.percentage < 75
      ).length,
      icon: AlertTriangle,
      description: "Attendance shortage",
    },
  ];

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="p-6 ">

      {/* PAGE HEADER */}
      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Attendance
        </h1>

        <p className="text-gray-500 mt-1">
          Monitor student attendance class-wise and student-wise
        </p>

      </div>

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Attendance Filters
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Select options to view attendance records
            </p>
          </div>

          <button
            onClick={resetFilters}
            className="flex items-center justify-center gap-2
            px-4 py-2 rounded-lg border border-gray-300
            text-sm font-medium text-gray-600
            hover:bg-gray-50 transition"
          >
            <RotateCcw size={16} />
            Reset Filters
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* ACADEMIC YEAR */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Academic Year
            </label>

            <select
              value={academicYear}
              onChange={(e) =>
                setAcademicYear(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >
              <option value="2026-27">
                2026-27
              </option>

              <option value="2025-26">
                2025-26
              </option>

              <option value="2024-25">
                2024-25
              </option>

            </select>

          </div>

          {/* DEPARTMENT */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>

            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >

              <option>
                All Departments
              </option>

              <option>
                AI & DS
              </option>

              <option>
                Computer Science
              </option>

              <option>
                Information Technology
              </option>

              <option>
                Electronics & Telecommunication
              </option>

              <option>
                Mechanical
              </option>

            </select>

          </div>

          {/* CLASS */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class
            </label>

            <select
              value={selectedClass}
              onChange={(e) =>
                setSelectedClass(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >

              <option>
                All Classes
              </option>

              <option>FE</option>
              <option>SE</option>
              <option>TE</option>
              <option>BE</option>

            </select>

          </div>

          {/* DIVISION */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Division
            </label>

            <select
              value={division}
              onChange={(e) =>
                setDivision(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >

              <option>
                All Divisions
              </option>

              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>

            </select>

          </div>

          {/* ATTENDANCE VIEW */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attendance View
            </label>

            <select
              value={attendanceView}
              onChange={(e) =>
                setAttendanceView(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >

              <option>
                Overall Attendance
              </option>

              <option>
                Class-wise Attendance
              </option>

              <option>
                Student-wise Attendance
              </option>

            </select>

          </div>

        </div>

      </div>

      {/* =====================================================
          KPI CARDS
      ====================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">

        {attendanceCards.map((card) => {

          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-white border border-gray-200
              rounded-xl p-5 shadow-sm
              hover:shadow-md transition"
            >

              <div
                className="w-11 h-11 rounded-lg
                bg-blue-50 text-blue-600
                flex items-center justify-center mb-4"
              >
                <Icon size={22} />
              </div>

              <p className="text-sm text-gray-500">
                {card.title}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {card.value}
              </h2>

              <p className="text-xs text-gray-400 mt-1">
                {card.description}
              </p>

            </div>
          );

        })}

      </div>

      {/* =====================================================
          OVERALL ATTENDANCE
      ====================================================== */}

      {attendanceView === "Overall Attendance" && (

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <h2 className="text-lg font-semibold text-gray-800">
                Overall Attendance Average
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Average attendance based on selected filters
              </p>

            </div>

            <div className="text-right">

              <p className="text-4xl font-bold text-blue-600">
                {overallAverage.toFixed(1)}%
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Overall Average
              </p>

            </div>

          </div>

          {/* PROGRESS BAR */}

          <div className="mt-8">

            <div className="flex justify-between text-sm mb-2">

              <span className="text-gray-600">
                Attendance Progress
              </span>

              <span className="font-semibold text-gray-700">
                {overallAverage.toFixed(1)}%
              </span>

            </div>

            <div className="w-full bg-gray-100 rounded-full h-4">

              <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(
                    overallAverage,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

          {/* SUMMARY */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

            <div className="p-4 bg-gray-50 rounded-lg">

              <p className="text-sm text-gray-500">
                Total Students
              </p>

              <p className="text-xl font-bold text-gray-800 mt-1">
                {totalStudents}
              </p>

            </div>

            <div className="p-4 bg-gray-50 rounded-lg">

              <p className="text-sm text-gray-500">
                Present Today
              </p>

              <p className="text-xl font-bold text-green-600 mt-1">
                {presentToday}
              </p>

            </div>

            <div className="p-4 bg-gray-50 rounded-lg">

              <p className="text-sm text-gray-500">
                Absent Today
              </p>

              <p className="text-xl font-bold text-red-600 mt-1">
                {absentToday}
              </p>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          CLASS-WISE ATTENDANCE
      ====================================================== */}

      {attendanceView === "Class-wise Attendance" && (

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

          <div className="p-5 border-b border-gray-200">

            <h2 className="text-lg font-semibold text-gray-800">
              Class-wise Attendance
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Attendance percentage for each class and division
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-5 py-3">
                    Class
                  </th>

                  <th className="text-left px-5 py-3">
                    Division
                  </th>

                  <th className="text-left px-5 py-3">
                    Department
                  </th>

                  <th className="text-left px-5 py-3">
                    Students
                  </th>

                  <th className="text-left px-5 py-3">
                    Present Today
                  </th>

                  <th className="text-left px-5 py-3">
                    Absent
                  </th>

                  <th className="text-left px-5 py-3">
                    Average
                  </th>

                  <th className="text-left px-5 py-3">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredClassData.length > 0 ? (

                  filteredClassData.map((item, index) => (

                    <tr
                      key={index}
                      className="border-t border-gray-100 hover:bg-gray-50"
                    >

                      <td className="px-5 py-4 font-medium">
                        {item.className}
                      </td>

                      <td className="px-5 py-4">
                        {item.division}
                      </td>

                      <td className="px-5 py-4">
                        {item.department}
                      </td>

                      <td className="px-5 py-4">
                        {item.students}
                      </td>

                      <td className="px-5 py-4 text-green-600 font-medium">
                        {item.presentToday}
                      </td>

                      <td className="px-5 py-4 text-red-600 font-medium">
                        {item.absentToday}
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {item.average}%
                      </td>

                      <td className="px-5 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.average >= 75
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.average >= 75
                            ? "Good"
                            : "Shortage"}
                        </span>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                      className="text-center py-10 text-gray-500"
                    >
                      No attendance records found for the selected filters.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      )}

      {/* =====================================================
          STUDENT-WISE ATTENDANCE
      ====================================================== */}

      {attendanceView === "Student-wise Attendance" && (

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

          <div className="p-5 border-b border-gray-200">

            <h2 className="text-lg font-semibold text-gray-800">
              Student-wise Attendance
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Individual student attendance records
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-5 py-3">
                    Student
                  </th>

                  <th className="text-left px-5 py-3">
                    PRN
                  </th>

                  <th className="text-left px-5 py-3">
                    Department
                  </th>

                  <th className="text-left px-5 py-3">
                    Class
                  </th>

                  <th className="text-left px-5 py-3">
                    Division
                  </th>

                  <th className="text-left px-5 py-3">
                    Present
                  </th>

                  <th className="text-left px-5 py-3">
                    Absent
                  </th>

                  <th className="text-left px-5 py-3">
                    Attendance
                  </th>

                  <th className="text-left px-5 py-3">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredStudentData.length > 0 ? (

                  filteredStudentData.map(
                    (student, index) => (

                      <tr
                        key={index}
                        className="border-t border-gray-100 hover:bg-gray-50"
                      >

                        <td className="px-5 py-4 font-medium">
                          {student.name}
                        </td>

                        <td className="px-5 py-4">
                          {student.prn}
                        </td>

                        <td className="px-5 py-4">
                          {student.department}
                        </td>

                        <td className="px-5 py-4">
                          {student.className}
                        </td>

                        <td className="px-5 py-4">
                          {student.division}
                        </td>

                        <td className="px-5 py-4 text-green-600 font-medium">
                          {student.present}
                        </td>

                        <td className="px-5 py-4 text-red-600 font-medium">
                          {student.absent}
                        </td>

                        <td className="px-5 py-4 font-semibold">
                          {student.percentage}%
                        </td>

                        <td className="px-5 py-4">

                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              student.percentage >= 75
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {student.percentage >= 75
                              ? "Eligible"
                              : "Shortage"}
                          </span>

                        </td>

                      </tr>

                    )
                  )

                ) : (

                  <tr>

                    <td
                      colSpan="9"
                      className="text-center py-10 text-gray-500"
                    >
                      No student attendance records found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  );
}

export default Attendance;