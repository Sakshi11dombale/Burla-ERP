import {
  FileText,
  PlusCircle,
  CheckCircle,
  Clock,
  XCircle,
  FileCheck,
} from "lucide-react";

function Admission() {

  const cards = [
    {
      title: "Total Applications",
      value: "1,250",
      icon: FileText,
      description: "Applications received",
    },
    {
      title: "New Applications",
      value: "420",
      icon: PlusCircle,
      description: "Recently submitted",
    },
    {
      title: "Approved",
      value: "680",
      icon: CheckCircle,
      description: "Approved admissions",
    },
    {
      title: "Pending",
      value: "320",
      icon: Clock,
      description: "Awaiting review",
    },
    {
      title: "Rejected",
      value: "90",
      icon: XCircle,
      description: "Rejected applications",
    },
    {
      title: "Documents Pending",
      value: "160",
      icon: FileCheck,
      description: "Verification pending",
    },
  ];

  return (
    <div className="p-6 ">

      {/* ================= HEADER ================= */}

      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Admission
        </h1>

        <p className="text-gray-500 mt-1">
          Manage student applications and admission processes
        </p>

      </div>


      {/* ================= KPI CARDS ================= */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-6
          gap-4
        "
      >

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="
                bg-white
                border
                border-gray-200
                rounded-xl
                p-5
                shadow-sm
                hover:shadow-md
                transition
              "
            >

              {/* ICON */}

              <div
                className="
                  w-11
                  h-11
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <Icon size={22} />
              </div>


              {/* TITLE */}

              <p className="text-sm text-gray-500">
                {card.title}
              </p>


              {/* VALUE */}

              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-800
                  mt-1
                "
              >
                {card.value}
              </h2>


              {/* DESCRIPTION */}

              <p
                className="
                  text-xs
                  text-gray-400
                  mt-1
                "
              >
                {card.description}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default Admission;