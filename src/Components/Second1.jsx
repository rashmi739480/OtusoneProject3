import React from 'react';

const bio = [
  {
    id: 1,
    icon: "/Images/teeth.webp",
    title: "Dentist",
  },
  {
    id: 2,
    icon: "/Images/mind.webp",
    title: "Urology",
  },
  {
    id: 3,
    icon: "/Images/FeFada.webp",
    title: "Neurology",
  },
  {
    id: 4,
    icon: "/Images/Haddi.webp",
    title: "Orthopedic",
  },
  {
    id: 5,
    icon: "/Images/Heart.webp",
    title: "Cardiologist",
  }
];

const Second1 = () => {
  return (
    <section className="bg-white md:py-[80px] sm:py-[50px] py-[40px]">
      <div className="w-full px-4 sm:px-6 md:px-8 mx-auto">
      <div className="mb-12 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    Doctors, Departments and Specialties for Online Consultation
  </h2>
  <p className="text-[#757575] text-base sm:text-lg mt-3 max-w-3xl mx-auto">
    We, at Vinshealth.com, are associate partners with more than 12,000+ doctors and 50+ hospitals across different locations in India.
  </p>
</div>


        {/* Grid of Doctors */}
      {/* Grid of Doctors */}
<div className="overflow-x-auto max-w-[70%] mt-18 justify-self-center scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
  <div className="flex space-x-4 px-4 py-10 overflow-x-auto">
    {bio.map((t3) => (
      <div
        key={t3.id}
        className="text-center px-3 ml-0 mr-5 mt-2 w-full sm:w-auto"
      >
        <div className="w-full inline-block">
          <div className="h-16 w-44 flex-shrink-0 inline-block relative rounded-full bg-white shadow-md text-center">
            <img
              className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 mx-auto max-w-full h-auto"
              src={t3.icon}
              alt={t3.title} // Ensure the alt text describes the image properly
            />
          </div>
          <p className="text-base font-medium mt-8">{t3.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>





      </div>
    </section>
  );
};


export default Second1;
