import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    title: "Total Students",
    value: "1000",
    icon: Users,
  },
  {
    title: "Total Applications",
    value: "500",
    icon: FileText,
  },
  {
    title: "Approved Applications",
    value: "400",
    icon: CheckCircle,
  },
  {
    title: "Pending Applications",
    value: "100",
    icon: Clock,
  },
  {
    title: "Total Faculty",
    value: "168",
    icon: GraduationCap,
  },
];

function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm min-w-0"
          >
            <div className="flex items-start justify-between">

              <div className="min-w-0">
                <p className="text-sm text-gray-500 truncate">
                  {card.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {card.value}
                </h2>
              </div>

              <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 text-blue-600">
                <Icon size={21} />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default KPICards;