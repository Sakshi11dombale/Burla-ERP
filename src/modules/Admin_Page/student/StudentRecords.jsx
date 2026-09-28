import React, { useState } from "react";
import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Sakshi Dombale",
    className: "B.Tech",
    division: "A",
    department: "AI & DS",
    prn: "2021AIDS001",
    rollNo: "01",
    status: "Approved",
    appliedDate: "12 Sep 2026",
  },
  {
    id: 2,
    name: "Shravani Battul",
    className: "B.Tech",
    division: "A",
    department: "AI & DS",
    prn: "2021AIDS002",
    rollNo: "02",
    status: "Pending",
    appliedDate: "14 Sep 2026",
  },
  {
    id: 3,
    name: "Priya Patil",
    className: "B.Tech",
    division: "B",
    department: "CSE",
    prn: "2021CSE015",
    rollNo: "15",
    status: "Under Review",
    appliedDate: "15 Sep 2026",
  },
  {
    id: 4,
    name: "Aarav Kulkarni",
    className: "B.Tech",
    division: "A",
    department: "ECE",
    prn: "2021ECE021",
    rollNo: "21",
    status: "Approved",
    appliedDate: "16 Sep 2026",
  },
  {
    id: 5,
    name: "Neha Sharma",
    className: "B.Tech",
    division: "B",
    department: "Mechanical",
    prn: "2021ME034",
    rollNo: "34",
    status: "Documents Pending",
    appliedDate: "17 Sep 2026",
  },
  {
    id: 6,
    name: "Rahul Patil",
    className: "B.Tech",
    division: "A",
    department: "Civil",
    prn: "2021CV041",
    rollNo: "41",
    status: "Rejected",
    appliedDate: "18 Sep 2026",
  },
];

const StudentRecords = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.prn.toLowerCase().includes(search.toLowerCase()) ||
      student.department.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || student.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleView = (student) => {
    console.log("View student:", student);

    // Later you can navigate to:
    // /admin/students/1
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 ">

      {/* ================= HEADER ================= */}

      <div className="p-5 border-b border-gray-200">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Student Records
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage and view student application records
            </p>
          </div>

          {/* Search + Filter */}

          <div className="flex flex-col sm:flex-row gap-3">

            {/* Search */}

            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full sm:w-64
                  pl-10 pr-4 py-2.5
                  border border-gray-200
                  rounded-lg
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            {/* Status Filter */}

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                px-4 py-2.5
                border border-gray-200
                rounded-lg
                text-sm
                bg-white
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option value="All">All Status</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Under Review">Under Review</option>
              <option value="Documents Pending">
                Documents Pending
              </option>
              <option value="Rejected">Rejected</option>
            </select>

          </div>

        </div>

      </div>


      {/* ================= TABLE ================= */}

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                #
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Student
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Class
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Div
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Department
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                PRN
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Roll No.
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Application Status
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Applied Date
              </th>

              <th className="px-5 py-4 text-center font-semibold text-gray-600">
                Action
              </th>

            </tr>
          </thead>


          <tbody>

            {filteredStudents.length > 0 ? (

              filteredStudents.map((student, index) => (

                <tr
                  key={student.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >

                  {/* Number */}

                  <td className="px-5 py-4 text-gray-500">
                    {index + 1}
                  </td>


                  {/* Student */}

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="
                        w-9 h-9
                        rounded-full
                        bg-blue-100
                        text-blue-600
                        flex items-center justify-center
                        font-semibold
                      ">
                        {student.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {student.name}
                        </p>
                      </div>

                    </div>

                  </td>


                  {/* Class */}

                  <td className="px-5 py-4 text-gray-600">
                    {student.className}
                  </td>


                  {/* Division */}

                  <td className="px-5 py-4 text-gray-600">
                    {student.division}
                  </td>


                  {/* Department */}

                  <td className="px-5 py-4">

                    <span className="
                      px-2.5 py-1
                      rounded-md
                      bg-blue-50
                      text-blue-600
                      text-xs
                      font-medium
                    ">
                      {student.department}
                    </span>

                  </td>


                  {/* PRN */}

                  <td className="px-5 py-4 text-gray-600 font-mono text-xs">
                    {student.prn}
                  </td>


                  {/* Roll Number */}

                  <td className="px-5 py-4 text-gray-600">
                    {student.rollNo}
                  </td>


                  {/* Status */}

                  <td className="px-5 py-4">
                    <StatusBadge status={student.status} />
                  </td>


                  {/* Applied Date */}

                  <td className="px-5 py-4 text-gray-600">
                    {student.appliedDate}
                  </td>


                  {/* View */}

                  <td className="px-5 py-4 text-center">

                    <button
                      onClick={() => handleView(student)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        text-blue-600
                        bg-blue-50
                        hover:bg-blue-100
                        transition
                        font-medium
                      "
                    >
                      <Eye size={16} />
                      View
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="10"
                  className="text-center py-10 text-gray-500"
                >
                  No student records found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* ================= FOOTER ================= */}

      <div className="
        px-5 py-4
        border-t border-gray-200
        flex
        items-center
        justify-between
      ">

        <p className="text-sm text-gray-500">
          Showing {filteredStudents.length} of {students.length} students
        </p>

        <div className="flex gap-2">

          <button
            className="
              p-2
              rounded-lg
              border border-gray-200
              text-gray-500
              hover:bg-gray-50
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="
              p-2
              rounded-lg
              border border-gray-200
              text-gray-500
              hover:bg-gray-50
            "
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};


// =====================================================
// STATUS BADGE
// =====================================================

const StatusBadge = ({ status }) => {

  const styles = {
    Approved: "bg-green-50 text-green-700",
    Pending: "bg-yellow-50 text-yellow-700",
    "Under Review": "bg-blue-50 text-blue-700",
    "Documents Pending": "bg-orange-50 text-orange-700",
    Rejected: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`
        inline-flex
        px-2.5
        py-1
        rounded-full
        text-xs
        font-medium
        ${styles[status] || "bg-gray-100 text-gray-600"}
      `}
    >
      {status}
    </span>
  );
};

export default StudentRecords;