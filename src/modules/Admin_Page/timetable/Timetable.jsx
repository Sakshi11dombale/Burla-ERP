import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock,
  BookOpen,
  User,
  MapPin,
  RotateCcw,
} from "lucide-react";

function Timetable() {
  // =========================================================
  // FILTER STATES
  // =========================================================

  const [academicYear, setAcademicYear] = useState("2026-27");
  const [department, setDepartment] = useState("AI & DS");
  const [selectedClass, setSelectedClass] = useState("TE");
  const [division, setDivision] = useState("A");
  const [selectedDay, setSelectedDay] = useState("Monday");

  // =========================================================
  // TIMETABLE DATA
  // =========================================================

  const timetableData = [
    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "TE",
      division: "A",
      day: "Monday",
      periods: [
        {
          time: "09:00 - 10:00",
          subject: "Machine Learning",
          faculty: "Prof. Sneha Patil",
          room: "Lab 301",
          type: "Theory",
        },
        {
          time: "10:00 - 11:00",
          subject: "Data Mining",
          faculty: "Prof. Rahul Joshi",
          room: "Room 204",
          type: "Theory",
        },
        {
          time: "11:00 - 11:15",
          subject: "Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "11:15 - 12:15",
          subject: "Artificial Intelligence",
          faculty: "Prof. Priya More",
          room: "Room 305",
          type: "Theory",
        },
        {
          time: "12:15 - 01:15",
          subject: "Web Technology",
          faculty: "Prof. Amit Shinde",
          room: "Room 202",
          type: "Theory",
        },
        {
          time: "01:15 - 02:00",
          subject: "Lunch Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "02:00 - 04:00",
          subject: "Machine Learning Lab",
          faculty: "Prof. Sneha Patil",
          room: "AI Lab",
          type: "Practical",
        },
      ],
    },

    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "TE",
      division: "A",
      day: "Tuesday",
      periods: [
        {
          time: "09:00 - 10:00",
          subject: "Data Mining",
          faculty: "Prof. Rahul Joshi",
          room: "Room 204",
          type: "Theory",
        },
        {
          time: "10:00 - 11:00",
          subject: "Artificial Intelligence",
          faculty: "Prof. Priya More",
          room: "Room 305",
          type: "Theory",
        },
        {
          time: "11:00 - 11:15",
          subject: "Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "11:15 - 12:15",
          subject: "Web Technology",
          faculty: "Prof. Amit Shinde",
          room: "Room 202",
          type: "Theory",
        },
        {
          time: "12:15 - 01:15",
          subject: "Cloud Computing",
          faculty: "Prof. Neha Kulkarni",
          room: "Room 205",
          type: "Theory",
        },
        {
          time: "01:15 - 02:00",
          subject: "Lunch Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "02:00 - 04:00",
          subject: "Data Mining Lab",
          faculty: "Prof. Rahul Joshi",
          room: "Data Lab",
          type: "Practical",
        },
      ],
    },

    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "TE",
      division: "A",
      day: "Wednesday",
      periods: [
        {
          time: "09:00 - 10:00",
          subject: "Cloud Computing",
          faculty: "Prof. Neha Kulkarni",
          room: "Room 205",
          type: "Theory",
        },
        {
          time: "10:00 - 11:00",
          subject: "Machine Learning",
          faculty: "Prof. Sneha Patil",
          room: "Room 301",
          type: "Theory",
        },
        {
          time: "11:00 - 11:15",
          subject: "Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "11:15 - 12:15",
          subject: "Data Mining",
          faculty: "Prof. Rahul Joshi",
          room: "Room 204",
          type: "Theory",
        },
        {
          time: "12:15 - 01:15",
          subject: "Artificial Intelligence",
          faculty: "Prof. Priya More",
          room: "Room 305",
          type: "Theory",
        },
        {
          time: "01:15 - 02:00",
          subject: "Lunch Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "02:00 - 04:00",
          subject: "Web Technology Lab",
          faculty: "Prof. Amit Shinde",
          room: "Web Lab",
          type: "Practical",
        },
      ],
    },

    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "TE",
      division: "A",
      day: "Thursday",
      periods: [
        {
          time: "09:00 - 10:00",
          subject: "Artificial Intelligence",
          faculty: "Prof. Priya More",
          room: "Room 305",
          type: "Theory",
        },
        {
          time: "10:00 - 11:00",
          subject: "Web Technology",
          faculty: "Prof. Amit Shinde",
          room: "Room 202",
          type: "Theory",
        },
        {
          time: "11:00 - 11:15",
          subject: "Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "11:15 - 12:15",
          subject: "Machine Learning",
          faculty: "Prof. Sneha Patil",
          room: "Room 301",
          type: "Theory",
        },
        {
          time: "12:15 - 01:15",
          subject: "Cloud Computing",
          faculty: "Prof. Neha Kulkarni",
          room: "Room 205",
          type: "Theory",
        },
        {
          time: "01:15 - 02:00",
          subject: "Lunch Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "02:00 - 04:00",
          subject: "AI Lab",
          faculty: "Prof. Priya More",
          room: "AI Lab",
          type: "Practical",
        },
      ],
    },

    {
      academicYear: "2026-27",
      department: "AI & DS",
      className: "TE",
      division: "A",
      day: "Friday",
      periods: [
        {
          time: "09:00 - 10:00",
          subject: "Web Technology",
          faculty: "Prof. Amit Shinde",
          room: "Room 202",
          type: "Theory",
        },
        {
          time: "10:00 - 11:00",
          subject: "Cloud Computing",
          faculty: "Prof. Neha Kulkarni",
          room: "Room 205",
          type: "Theory",
        },
        {
          time: "11:00 - 11:15",
          subject: "Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "11:15 - 12:15",
          subject: "Machine Learning",
          faculty: "Prof. Sneha Patil",
          room: "Room 301",
          type: "Theory",
        },
        {
          time: "12:15 - 01:15",
          subject: "Data Mining",
          faculty: "Prof. Rahul Joshi",
          room: "Room 204",
          type: "Theory",
        },
        {
          time: "01:15 - 02:00",
          subject: "Lunch Break",
          faculty: "-",
          room: "-",
          type: "Break",
        },
        {
          time: "02:00 - 04:00",
          subject: "Cloud Computing Lab",
          faculty: "Prof. Neha Kulkarni",
          room: "Cloud Lab",
          type: "Practical",
        },
      ],
    },
  ];

  // =========================================================
  // FILTER TIMETABLE
  // =========================================================

  const filteredTimetable = useMemo(() => {
    return timetableData.find(
      (item) =>
        item.academicYear === academicYear &&
        item.department === department &&
        item.className === selectedClass &&
        item.division === division &&
        item.day === selectedDay
    );
  }, [
    academicYear,
    department,
    selectedClass,
    division,
    selectedDay,
  ]);

  // =========================================================
  // RESET FILTERS
  // =========================================================

  const resetFilters = () => {
    setAcademicYear("2026-27");
    setDepartment("AI & DS");
    setSelectedClass("TE");
    setDivision("A");
    setSelectedDay("Monday");
  };

  // =========================================================
  // COUNT SUBJECTS
  // =========================================================

  const totalPeriods =
    filteredTimetable?.periods.filter(
      (period) => period.type !== "Break"
    ).length || 0;

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="p-6 ">

      {/* PAGE HEADER */}
      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Timetable
        </h1>

        <p className="text-gray-500 mt-1">
          Manage and view class-wise academic timetable
        </p>

      </div>

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Timetable Filters
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Select class and day to view the timetable
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

          {/* Academic Year */}
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
              <option value="2026-27">2026-27</option>
              <option value="2025-26">2025-26</option>
              <option value="2024-25">2024-25</option>
            </select>

          </div>

          {/* Department */}
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
              <option>AI & DS</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronics & Telecommunication</option>
              <option>Mechanical</option>
            </select>

          </div>

          {/* Class */}
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
              <option>FE</option>
              <option>SE</option>
              <option>TE</option>
              <option>BE</option>
            </select>

          </div>

          {/* Division */}
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
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>

          </div>

          {/* Day */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Day
            </label>

            <select
              value={selectedDay}
              onChange={(e) =>
                setSelectedDay(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>

          </div>

        </div>

      </div>

      {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        {/* Selected Class */}

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Selected Class
              </p>

              <h2 className="text-xl font-bold text-gray-800">
                {selectedClass} - {division}
              </h2>
            </div>

          </div>

        </div>

        {/* Day */}

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <CalendarDays size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Selected Day
              </p>

              <h2 className="text-xl font-bold text-gray-800">
                {selectedDay}
              </h2>
            </div>

          </div>

        </div>

        {/* Total Periods */}

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Periods
              </p>

              <h2 className="text-xl font-bold text-gray-800">
                {totalPeriods}
              </h2>
            </div>

          </div>

        </div>

        {/* Department */}

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <User size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Department
              </p>

              <h2 className="text-lg font-bold text-gray-800">
                {department}
              </h2>
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          TIMETABLE
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

        <div className="p-5 border-b border-gray-200">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

            <div>

              <h2 className="text-lg font-semibold text-gray-800">
                {selectedDay} Timetable
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {department} | {selectedClass} - {division} | {academicYear}
              </p>

            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={17} />
              {selectedDay}
            </div>

          </div>

        </div>

        {/* NO DATA */}

        {!filteredTimetable && (

          <div className="p-12 text-center">

            <CalendarDays
              size={48}
              className="mx-auto text-gray-300 mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-700">
              No Timetable Found
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              No timetable is available for the selected class,
              division and day.
            </p>

          </div>

        )}

        {/* TIMETABLE TABLE */}

        {filteredTimetable && (

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-5 py-4">
                    Time
                  </th>

                  <th className="text-left px-5 py-4">
                    Subject
                  </th>

                  <th className="text-left px-5 py-4">
                    Faculty
                  </th>

                  <th className="text-left px-5 py-4">
                    Room
                  </th>

                  <th className="text-left px-5 py-4">
                    Type
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredTimetable.periods.map(
                  (period, index) => (

                    <tr
                      key={index}
                      className={`border-t border-gray-100 ${
                        period.type === "Break"
                          ? "bg-gray-50"
                          : "hover:bg-gray-50"
                      }`}
                    >

                      {/* TIME */}

                      <td className="px-5 py-5">

                        <div className="flex items-center gap-2 text-gray-600">

                          <Clock size={16} />

                          <span className="font-medium">
                            {period.time}
                          </span>

                        </div>

                      </td>

                      {/* SUBJECT */}

                      <td className="px-5 py-5">

                        <div className="font-semibold text-gray-800">
                          {period.subject}
                        </div>

                      </td>

                      {/* FACULTY */}

                      <td className="px-5 py-5">

                        {period.faculty !== "-" ? (

                          <div className="flex items-center gap-2 text-gray-600">

                            <User size={16} />

                            {period.faculty}

                          </div>

                        ) : (
                          "-"
                        )}

                      </td>

                      {/* ROOM */}

                      <td className="px-5 py-5">

                        {period.room !== "-" ? (

                          <div className="flex items-center gap-2 text-gray-600">

                            <MapPin size={16} />

                            {period.room}

                          </div>

                        ) : (
                          "-"
                        )}

                      </td>

                      {/* TYPE */}

                      <td className="px-5 py-5">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            period.type === "Theory"
                              ? "bg-blue-100 text-blue-700"
                              : period.type === "Practical"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {period.type}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}

export default Timetable;