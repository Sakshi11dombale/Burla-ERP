import { useMemo, useState } from "react";
import {
  FileCheck,
  FileText,
  Clock,
  XCircle,
  Users,
  CheckCircle,
  Eye,
  RotateCcw,
} from "lucide-react";

function DocumentVerification() {
  // =========================================================
  // FILTER STATES
  // =========================================================

  const [academicYear, setAcademicYear] = useState("2026-27");
  const [department, setDepartment] =
    useState("All Departments");
  const [selectedClass, setSelectedClass] =
    useState("All Classes");
  const [documentType, setDocumentType] =
    useState("All Documents");
  const [verificationStatus, setVerificationStatus] =
    useState("All Status");

  // =========================================================
  // SAMPLE DOCUMENT DATA
  // =========================================================

  const documents = [
    {
      id: 1,
      student: "Aarav Patil",
      prn: "2023012345",
      department: "AI & DS",
      className: "TE",
      document: "Aadhaar Card",
      submittedDate: "10 Sep 2026",
      status: "Verified",
    },
    {
      id: 2,
      student: "Aarav Patil",
      prn: "2023012345",
      department: "AI & DS",
      className: "TE",
      document: "10th Marksheet",
      submittedDate: "10 Sep 2026",
      status: "Verified",
    },
    {
      id: 3,
      student: "Aarav Patil",
      prn: "2023012345",
      department: "AI & DS",
      className: "TE",
      document: "12th Marksheet",
      submittedDate: "10 Sep 2026",
      status: "Pending",
    },
    {
      id: 4,
      student: "Sneha Joshi",
      prn: "2023012346",
      department: "AI & DS",
      className: "TE",
      document: "Aadhaar Card",
      submittedDate: "11 Sep 2026",
      status: "Verified",
    },
    {
      id: 5,
      student: "Sneha Joshi",
      prn: "2023012346",
      department: "AI & DS",
      className: "TE",
      document: "Caste Certificate",
      submittedDate: "11 Sep 2026",
      status: "Pending",
    },
    {
      id: 6,
      student: "Rahul Shinde",
      prn: "2023012347",
      department: "AI & DS",
      className: "TE",
      document: "Aadhaar Card",
      submittedDate: "12 Sep 2026",
      status: "Rejected",
    },
    {
      id: 7,
      student: "Rahul Shinde",
      prn: "2023012347",
      department: "AI & DS",
      className: "TE",
      document: "10th Marksheet",
      submittedDate: "12 Sep 2026",
      status: "Verified",
    },
    {
      id: 8,
      student: "Priya Deshmukh",
      prn: "2023012348",
      department: "AI & DS",
      className: "TE",
      document: "12th Marksheet",
      submittedDate: "13 Sep 2026",
      status: "Pending",
    },
    {
      id: 9,
      student: "Aditya Pawar",
      prn: "2023012349",
      department: "Computer Science",
      className: "SE",
      document: "Aadhaar Card",
      submittedDate: "14 Sep 2026",
      status: "Verified",
    },
    {
      id: 10,
      student: "Aditya Pawar",
      prn: "2023012349",
      department: "Computer Science",
      className: "SE",
      document: "12th Marksheet",
      submittedDate: "14 Sep 2026",
      status: "Verified",
    },
    {
      id: 11,
      student: "Neha Jadhav",
      prn: "2023012350",
      department: "Computer Science",
      className: "TE",
      document: "Caste Certificate",
      submittedDate: "15 Sep 2026",
      status: "Rejected",
    },
    {
      id: 12,
      student: "Omkar Joshi",
      prn: "2023012351",
      department: "Information Technology",
      className: "TE",
      document: "Aadhaar Card",
      submittedDate: "15 Sep 2026",
      status: "Pending",
    },
  ];

  // =========================================================
  // FILTER DATA
  // =========================================================

  const filteredDocuments = useMemo(() => {
    return documents.filter((item) => {
      const departmentMatch =
        department === "All Departments" ||
        item.department === department;

      const classMatch =
        selectedClass === "All Classes" ||
        item.className === selectedClass;

      const documentMatch =
        documentType === "All Documents" ||
        item.document === documentType;

      const statusMatch =
        verificationStatus === "All Status" ||
        item.status === verificationStatus;

      return (
        departmentMatch &&
        classMatch &&
        documentMatch &&
        statusMatch
      );
    });
  }, [
    department,
    selectedClass,
    documentType,
    verificationStatus,
  ]);

  // =========================================================
  // KPI COUNTS
  // =========================================================

  const totalDocuments = filteredDocuments.length;

  const verifiedDocuments = filteredDocuments.filter(
    (item) => item.status === "Verified"
  ).length;

  const pendingDocuments = filteredDocuments.filter(
    (item) => item.status === "Pending"
  ).length;

  const rejectedDocuments = filteredDocuments.filter(
    (item) => item.status === "Rejected"
  ).length;

  const uniqueStudents = new Set(
    filteredDocuments.map((item) => item.prn)
  ).size;

  // =========================================================
  // RESET FILTERS
  // =========================================================

  const resetFilters = () => {
    setAcademicYear("2026-27");
    setDepartment("All Departments");
    setSelectedClass("All Classes");
    setDocumentType("All Documents");
    setVerificationStatus("All Status");
  };

  // =========================================================
  // VIEW DOCUMENT
  // =========================================================

  const handleView = (document) => {
    alert(
      `Viewing ${document.document}\n\nStudent: ${document.student}\nPRN: ${document.prn}`
    );
  };

  // =========================================================
  // VERIFY DOCUMENT
  // =========================================================

  const handleVerify = (document) => {
    alert(
      `${document.document} for ${document.student} marked as Verified.`
    );
  };

  // =========================================================
  // REJECT DOCUMENT
  // =========================================================

  const handleReject = (document) => {
    alert(
      `${document.document} for ${document.student} marked as Rejected.`
    );
  };

  // =========================================================
  // KPI CARDS
  // =========================================================

  const cards = [
    {
      title: "Total Documents",
      value: totalDocuments,
      icon: FileText,
      description: "Submitted documents",
    },
    {
      title: "Verified",
      value: verifiedDocuments,
      icon: CheckCircle,
      description: "Successfully verified",
    },
    {
      title: "Pending",
      value: pendingDocuments,
      icon: Clock,
      description: "Waiting for verification",
    },
    {
      title: "Rejected",
      value: rejectedDocuments,
      icon: XCircle,
      description: "Documents rejected",
    },
    {
      title: "Students",
      value: uniqueStudents,
      icon: Users,
      description: "Students in selection",
    },
    {
      title: "Verification Rate",
      value:
        totalDocuments > 0
          ? `${Math.round(
              (verifiedDocuments / totalDocuments) * 100
            )}%`
          : "0%",
      icon: FileCheck,
      description: "Documents verified",
    },
  ];

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="p-6">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Document Verification
        </h1>

        <p className="text-gray-500 mt-1">
          Verify and manage student academic and personal documents
        </p>

      </div>

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">

          <div>

            <h2 className="text-lg font-semibold text-gray-800">
              Document Filters
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Filter documents by department, class and status
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
              <option>2026-27</option>
              <option>2025-26</option>
              <option>2024-25</option>
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

              <option>All Departments</option>
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

              <option>All Classes</option>
              <option>FE</option>
              <option>SE</option>
              <option>TE</option>
              <option>BE</option>

            </select>

          </div>

          {/* Document Type */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document Type
            </label>

            <select
              value={documentType}
              onChange={(e) =>
                setDocumentType(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >

              <option>All Documents</option>
              <option>Aadhaar Card</option>
              <option>10th Marksheet</option>
              <option>12th Marksheet</option>
              <option>Caste Certificate</option>

            </select>

          </div>

          {/* Status */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Status
            </label>

            <select
              value={verificationStatus}
              onChange={(e) =>
                setVerificationStatus(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg
              px-3 py-2.5 bg-white text-gray-700
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
            >

              <option>All Status</option>
              <option>Verified</option>
              <option>Pending</option>
              <option>Rejected</option>

            </select>

          </div>

        </div>

      </div>

      {/* =====================================================
          KPI CARDS
      ====================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">

        {cards.map((card) => {

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
          DOCUMENT TABLE
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

        <div className="p-5 border-b border-gray-200">

          <h2 className="text-lg font-semibold text-gray-800">
            Document Records
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Review and verify submitted student documents
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
                  Document
                </th>

                <th className="text-left px-5 py-3">
                  Submitted Date
                </th>

                <th className="text-left px-5 py-3">
                  Status
                </th>

                <th className="text-left px-5 py-3">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredDocuments.length > 0 ? (

                filteredDocuments.map((document) => (

                  <tr
                    key={document.id}
                    className="border-t border-gray-100
                    hover:bg-gray-50"
                  >

                    {/* STUDENT */}

                    <td className="px-5 py-4">

                      <p className="font-medium text-gray-800">
                        {document.student}
                      </p>

                    </td>

                    {/* PRN */}

                    <td className="px-5 py-4">
                      {document.prn}
                    </td>

                    {/* DEPARTMENT */}

                    <td className="px-5 py-4">
                      {document.department}
                    </td>

                    {/* CLASS */}

                    <td className="px-5 py-4">
                      {document.className}
                    </td>

                    {/* DOCUMENT */}

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        <FileText
                          size={17}
                          className="text-blue-600"
                        />

                        <span className="font-medium">
                          {document.document}
                        </span>

                      </div>

                    </td>

                    {/* DATE */}

                    <td className="px-5 py-4 text-gray-600">
                      {document.submittedDate}
                    </td>

                    {/* STATUS */}

                    <td className="px-5 py-4">

                      <span
                        className={`px-3 py-1 rounded-full
                        text-xs font-medium ${
                          document.status === "Verified"
                            ? "bg-green-100 text-green-700"
                            : document.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {document.status}
                      </span>

                    </td>

                    {/* ACTION */}

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        {/* VIEW */}

                        <button
                          onClick={() =>
                            handleView(document)
                          }
                          className="flex items-center gap-1
                          px-3 py-1.5 rounded-lg
                          bg-blue-50 text-blue-600
                          hover:bg-blue-100
                          text-xs font-medium"
                        >
                          <Eye size={14} />
                          View
                        </button>

                        {/* VERIFY */}

                        {document.status === "Pending" && (

                          <button
                            onClick={() =>
                              handleVerify(document)
                            }
                            className="flex items-center gap-1
                            px-3 py-1.5 rounded-lg
                            bg-green-50 text-green-600
                            hover:bg-green-100
                            text-xs font-medium"
                          >
                            <CheckCircle size={14} />
                            Verify
                          </button>

                        )}

                        {/* REJECT */}

                        {document.status === "Pending" && (

                          <button
                            onClick={() =>
                              handleReject(document)
                            }
                            className="flex items-center gap-1
                            px-3 py-1.5 rounded-lg
                            bg-red-50 text-red-600
                            hover:bg-red-100
                            text-xs font-medium"
                          >
                            <XCircle size={14} />
                            Reject
                          </button>

                        )}

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-12 text-gray-500"
                  >

                    <FileText
                      size={40}
                      className="mx-auto text-gray-300 mb-3"
                    />

                    <p className="font-medium">
                      No documents found
                    </p>

                    <p className="text-sm mt-1">
                      Try changing your filters.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default DocumentVerification;