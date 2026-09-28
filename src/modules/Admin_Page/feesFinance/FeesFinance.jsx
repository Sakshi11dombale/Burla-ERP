import {
  IndianRupee,
  CreditCard,
  WalletCards,
  Clock,
  Users,
  GraduationCap,
} from "lucide-react";

function FeesFinance() {

  const cards = [
    {
      title: "Total Fee Collection",
      value: "₹2.45 Cr",
      icon: IndianRupee,
      description: "Collected this academic year",
    },
    {
      title: "Pending Fees",
      value: "₹38.5 L",
      icon: Clock,
      description: "Outstanding amount",
    },
    {
      title: "Paid Students",
      value: "2,685",
      icon: CreditCard,
      description: "Fees fully paid",
    },
    {
      title: "Pending Students",
      value: "560",
      icon: Users,
      description: "Payment pending",
    },
    {
      title: "Today's Collection",
      value: "₹4.85 L",
      icon: WalletCards,
      description: "Collected today",
    },
    {
      title: "Scholarships",
      value: "₹18.2 L",
      icon: GraduationCap,
      description: "Scholarship amount",
    },
  ];

  return (
    <div className="p-6 ">

      {/* ================= HEADER ================= */}

      <div className="mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Fees & Finance
        </h1>

        <p className="text-gray-500 mt-1">
          Manage student fees, payments and financial information
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

export default FeesFinance;