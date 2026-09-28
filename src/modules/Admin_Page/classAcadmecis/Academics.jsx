import {
  BookOpen,
  GraduationCap,
  Building2,
  Users,
  UserCheck,
  CalendarDays,
} from "lucide-react";

function Academics() {

  const cards = [
    {
      title: "Total Classes",
      value: "42",
      icon: BookOpen,
      description: "Active classes",
    },
    {
      title: "Total Courses",
      value: "96",
      icon: GraduationCap,
      description: "Academic courses",
    },
    {
      title: "Departments",
      value: "5",
      icon: Building2,
      description: "Active departments",
    },
    {
      title: "Total Students",
      value: "3,245",
      icon: Users,
      description: "Currently enrolled",
    },
    {
      title: "Faculty Assigned",
      value: "168",
      icon: UserCheck,
      description: "Teaching faculty",
    },
    {
      title: "Academic Year",
      value: "2026-27",
      icon: CalendarDays,
      description: "Current academic year",
    },
  ];

  return (
    <div className="p-6 ">

      {/* ================= HEADER ================= */}

      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Class & Academics
        </h1>

        <p className="text-gray-500 mt-1">
          Manage classes, courses, departments and academic information
        </p>

      </div>


      {/* ================= INFORMATION CARDS ================= */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-6
        gap-4
      ">

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

              {/* Icon */}

              <div className="
                w-11
                h-11
                rounded-lg
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
                mb-4
              ">
                <Icon size={22} />
              </div>


              {/* Title */}

              <p className="text-sm text-gray-500">
                {card.title}
              </p>


              {/* Value */}

              <h2 className="
                text-2xl
                font-bold
                text-gray-800
                mt-1
              ">
                {card.value}
              </h2>


              {/* Description */}

              <p className="
                text-xs
                text-gray-400
                mt-1
              ">
                {card.description}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default Academics;