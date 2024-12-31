import React from "react";

const HorizontalScroll = () => {
  const items = [
    { id: 1, title: "Dentist", icon: "" },
    { id: 2, title: "Urology", icon: "🩺" },
    { id: 3, title: "Neurology", icon: "🧠" },
    { id: 4, title: "Orthopedic", icon: "🦴" },
    { id: 5, title: "Cardiologist", icon: "❤️" },
  ];

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="flex gap-6  scrollbar-hide p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center min-w-[120px] p-4 bg-white shadow-md rounded-lg"
          >
            {/* Icon */}
            <div className="text-4xl mb-2">{item.icon}</div>
            {/* Title */}
            <p className="text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
