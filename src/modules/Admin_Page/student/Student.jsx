import StudentRecords from "./StudentRecords";

function Student() {

  return (

    <div className="p-6">

      {/* ================= HEADER ================= */}

      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800 ">
          Students
        </h1>

        <p className="text-gray-500 mt-1 ">
          Manage student records and applications
        </p>

      </div>


      {/* ================= STUDENT RECORDS ================= */}

      <StudentRecords />

    </div>

  );
}

export default Student;