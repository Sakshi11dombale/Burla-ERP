import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Phone,
  Mail,
  GraduationCap,
  Briefcase,
  MapPin,
  X,
  Edit,
  UserRound,
} from "lucide-react";

const teachers = [
  {
    id: "TCH001",
    name: "Dr. Priya Sharma",
    designation: "Assistant Professor",
    department: "BA",
    subject: "Machine Learning",
    phone: "+91 98765 43210",
    email: "priya.sharma@college.edu",
    qualification: "Ph.D. in Computer Science",
    specialization: "Machine Learning & AI",
    experience: "8 Years",
    joiningDate: "12 June 2018",
    classAssigned: "TE AI & DS",
    section: "A",
    room: "304",
    status: "Active",
  },
  {
    id: "TCH002",
    name: "Prof. Rahul Patil",
    designation: "Associate Professor",
    department: "B.Com",
    subject: "Data Structures & Algorithms",
    phone: "+91 97654 32109",
    email: "rahul.patil@college.edu",
    qualification: "M.Tech",
    specialization: "Algorithms & Data Structures",
    experience: "11 Years",
    joiningDate: "08 July 2015",
    classAssigned: "SE AI & DS",
    section: "A",
    room: "305",
    status: "Active",
  },
  {
    id: "TCH003",
    name: "Prof. Sneha Kulkarni",
    designation: "Assistant Professor",
    department: "M.Com",
    subject: "Database Management Systems",
    phone: "+91 98234 56781",
    email: "sneha.k@college.edu",
    qualification: "M.Tech",
    specialization: "Database Systems",
    experience: "6 Years",
    joiningDate: "15 August 2020",
    classAssigned: "TE AI & DS",
    section: "B",
    room: "306",
    status: "Active",
  },
  {
    id: "TCH004",
    name: "Dr. Amit Joshi",
    designation: "Professor",
    department: "BCA",
    subject: "Artificial Intelligence",
    phone: "+91 98989 12345",
    email: "amit.joshi@college.edu",
    qualification: "Ph.D. in AI",
    specialization: "Artificial Intelligence",
    experience: "14 Years",
    joiningDate: "10 June 2012",
    classAssigned: "BE AI & DS",
    section: "A",
    room: "301",
    status: "Active",
  },
  {
    id: "TCH005",
    name: "Prof. Neha Deshmukh",
    designation: "Assistant Professor",
    department: "BCS",
    subject: "Operating Systems",
    phone: "+91 98111 22334",
    email: "neha.d@college.edu",
    qualification: "M.E. Computer",
    specialization: "Operating Systems",
    experience: "7 Years",
    joiningDate: "20 June 2019",
    classAssigned: "TE Computer",
    section: "A",
    room: "205",
    status: "Active",
  },
  {
    id: "TCH006",
    name: "Dr. Rajesh More",
    designation: "Associate Professor",
    department: "Computer Engineering",
    subject: "Computer Networks",
    phone: "+91 97777 44556",
    email: "rajesh.more@college.edu",
    qualification: "Ph.D.",
    specialization: "Computer Networks",
    experience: "12 Years",
    joiningDate: "05 July 2014",
    classAssigned: "BE Computer",
    section: "B",
    room: "207",
    status: "Active",
  },
];

const departments = [
  "All Departments",
  "BA",
  "B.Com",
  "M.Com",
  "BCA",
  "BCS",
];

export default function TeacherManagement() {
  const [department, setDepartment] = useState("All Departments");
  const [search, setSearch] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesDepartment =
        department === "All Departments" ||
        teacher.department === department;

      const searchText = search.toLowerCase();

      const matchesSearch =
        teacher.name.toLowerCase().includes(searchText) ||
        teacher.id.toLowerCase().includes(searchText) ||
        teacher.subject.toLowerCase().includes(searchText) ||
        teacher.department.toLowerCase().includes(searchText);

      return matchesDepartment && matchesSearch;
    });
  }, [department, search]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 ">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Teacher Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage faculty records department-wise
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700">
          <Plus size={19} />
          Add Teacher
        </button>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">

          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search teacher, ID, subject or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
          >
            {departments.map((dept) => (
              <option key={dept}>{dept}</option>
            ))}
          </select>

        </div>
      </div>

      {/* Department Tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setDepartment(dept)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              department === dept
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            {department}
          </h2>
          <p className="text-sm text-slate-500">
            {filteredTeachers.length} faculty member
            {filteredTeachers.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Teacher Cards */}
      {filteredTeachers.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

          {filteredTeachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onView={() => setSelectedTeacher(teacher)}
            />
          ))}

        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <UserRound className="mx-auto mb-3 text-slate-400" size={42} />
          <h3 className="font-semibold text-slate-700">
            No teachers found
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Try changing the search or department filter.
          </p>
        </div>
      )}

      {/* Profile Modal */}
      {selectedTeacher && (
        <TeacherProfile
          teacher={selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
        />
      )}
    </div>
  );
}

function TeacherCard({ teacher, onView }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}
      <div className="flex items-start justify-between p-5">

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <UserRound size={27} />
          </div>

          <div>
            <h3 className="font-bold text-slate-800">
              {teacher.name}
            </h3>

            <p className="text-sm text-slate-500">
              {teacher.designation}
            </p>

            <span className="mt-1 inline-block text-xs font-medium text-blue-600">
              {teacher.id}
            </span>
          </div>
        </div>

        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
          ● {teacher.status}
        </span>

      </div>

      {/* Information */}
      <div className="space-y-3 border-t border-slate-100 px-5 py-4">

        <InfoRow
          icon={<Briefcase size={17} />}
          label="Department"
          value={teacher.department}
        />

        <InfoRow
          icon={<GraduationCap size={17} />}
          label="Subject"
          value={teacher.subject}
        />

        <InfoRow
          icon={<Phone size={17} />}
          label="Phone"
          value={teacher.phone}
        />

        <InfoRow
          icon={<Mail size={17} />}
          label="Email"
          value={teacher.email}
        />

        <InfoRow
          icon={<Briefcase size={17} />}
          label="Experience"
          value={teacher.experience}
        />

      </div>

      {/* Footer */}
      <div className="flex gap-3 border-t border-slate-100 p-4">

        <button
          onClick={onView}
          className="flex-1 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
        >
          View Profile
        </button>

        <button className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-slate-600 transition hover:bg-slate-50">
          <Edit size={17} />
        </button>

      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 text-slate-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-400">
          {label}
        </p>

        <p className="truncate text-sm font-medium text-slate-700">
          {value}
        </p>
      </div>

    </div>
  );
}

function TeacherProfile({ teacher, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <UserRound size={32} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {teacher.name}
              </h2>

              <p className="text-slate-500">
                {teacher.designation}
              </p>

              <p className="mt-1 text-sm font-medium text-blue-600">
                {teacher.id}
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Details */}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">

          <ProfileItem
            title="Department"
            value={teacher.department}
          />

          <ProfileItem
            title="Subject"
            value={teacher.subject}
          />

          <ProfileItem
            title="Phone Number"
            value={teacher.phone}
          />

          <ProfileItem
            title="Email"
            value={teacher.email}
          />

          <ProfileItem
            title="Qualification"
            value={teacher.qualification}
          />

          <ProfileItem
            title="Specialization"
            value={teacher.specialization}
          />

          <ProfileItem
            title="Experience"
            value={teacher.experience}
          />

          <ProfileItem
            title="Joining Date"
            value={teacher.joiningDate}
          />

          <ProfileItem
            title="Class Assigned"
            value={teacher.classAssigned}
          />

          <ProfileItem
            title="Section"
            value={teacher.section}
          />

          <ProfileItem
            title="Room Number"
            value={teacher.room}
          />

          <ProfileItem
            title="Status"
            value={teacher.status}
          />

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-100 p-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">
            Edit Teacher
          </button>

        </div>

      </div>
    </div>
  );
}

function ProfileItem({ title, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
        {title}
      </p>

      <p className="font-semibold text-slate-700">
        {value}
      </p>
    </div>
  );
}