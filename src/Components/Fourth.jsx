import React from 'react';

const bio = [
  {
    id: 1,
    icon: "/Images/feature-01.webp",
    title: "Dentist",
  },
  {
    id: 2,
    icon: "/Images/feature-02.webp",
    title: "Urology",
  },
  {
    id: 3,
    icon: "/Images/feature-03.webp",
    title: "Neurology",
  },
  {
    id: 4,
    icon: "/Images/feature-04.webp",
    title: "Orthopedic",
  },
  {
    id: 5,
    icon: "/Images/feature-05.webp",
    title: "Cardiologist",
  },
  {
    id: 6,
    icon: "/Images/feature-06.webp",
    title: "Medical World", // Empty title, can be filled later if needed
  }
];

const Fourth = () => {
  return (
    <section className='py-20'>
    <div className='container pl-4 sm:pl-6 md:pl-8 lg:pl-10'>
      <div className='flex flex-wrap items-center -mx-6'>
        {/* Image Section */}
        <div className='w-full md:w-2/5 pl-6 mb-8 md:mb-0'>
          <img
            className='w-full h-auto max-w-full rounded-md object-cover'
            src="/Images/feature.webp"
            alt="Clinic Feature"
          />
        </div>
  
        {/* Text Section */}
        <div className='w-full md:w-3/5 pl-6'>
          <div className='mb-10'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
              Available Features in Our Clinic
            </h2>
            <p className="text-[#757575] text-sm sm:text-base md:text-lg mt-3 max-w-3xl">
              We have been partnered with various private doctors, wards, clinics, and laboratories;
              helping you with medical solutions of all kinds.
            </p>
          </div>
  
          {/* Icons Section */}
          <div className="overflow-x-auto w-full mt-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="flex flex-nowrap space-x-4 py-4">
              {bio.map((t3) => (
                <div
                  key={t3.id}
                  className="text-center flex-shrink-0 w-[140px] sm:w-[150px] md:w-[160px] px-2"
                >
                  <div className="relative rounded-full bg-white shadow-md overflow-hidden mx-auto">
                    <img
                      className="rounded-full shadow-lg object-cover w-[100px] h-[100px] md:w-[115px] md:h-[115px] mx-auto"
                      src={t3.icon}
                      alt={t3.title}
                    />
                  </div>
                  <p className="text-sm sm:text-base font-medium mt-4">{t3.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Fourth;
