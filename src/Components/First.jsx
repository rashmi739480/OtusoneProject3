import React from 'react'
import { FaLocationDot } from "react-icons/fa6";



const cards = [
    {
        title: "Visit a Doctor",
        id: 1,
        img: "/Images/doctor.webp",
        btntext: "Book Now"
    },
    {
        id: 2,
        title: "Find a Pharmacy",
        img: "/Images/pharmacy.webp",
        btntext: "Find Now"
    },
    {
        id: 3,
        title: "Find a Lab",
        img: "/Images/lab.webp",
        btntext: "Coming Soon"
    },
]
const First = () => {
    return (
        <div className='md:min-h-80 py-8'>
            <div className='px-5 w-[100%]'>

                <div className='min-h-[330px] ml-0 mr-auto md:bg-[url(/Images/Firstpgimg.webp)]  xsm:bg-none bg-bottom  bg-no-repeat bg-[#f9f9f9] w-full h-auto md:py-32 px-0 relative bg-blend-darken'>
                    <div className='mb-8 text-center'>
                        <h1 className='text-4xl mb-3 font-bold '>Book Doctor's Appointment Online Near You </h1>
                        <p className='text-[#757575] text-base  sm:text-lg '>Search and consult top doctors for any health issues near you.</p>



                    </div>
                    <div className="xsm:max-w-[535px] mx-auto my-12 sm:my-14 px-4">
                        <form action="#" className="flex flex-col sm:flex-row justify-center gap-4">
                            {/* Search City Input */}
                            <div className="relative w-full sm:w-60">
                                <input
                                    type="text"
                                    placeholder="Search city"
                                    required
                                    aria-label="Search city"
                                    className=" p-[10px] bg-center bg-no-repeat border border-[#ccc] shadow-inset-custom rounded-md w-full min-h-11"
                                />
                                <a href="#" className="block mt-2 text-center">
                                    <span className="font-medium text-base flex items-center text-black hover:text-blue-800 transition">
                                        <FaLocationDot className="mr-2 text-lg" />
                                        Detect my location
                                    </span>
                                </a>
                            </div>

                            {/* Search Service Input */}
                            <div className="relative w-full sm:w-60">
                                <input
                                    type="text"
                                    placeholder="Search Service"
                                    required
                                    aria-label="Search Service"
                                    className=" p-[10px] bg-center bg-no-repeat border border-[#ccc] shadow-inset-custom rounded-md w-full min-h-11"
                                />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            <section className='bg-[#f8f9fa] py-20 px-0'>


                <div className='container-fluid px-8 sm:px-4 md:px-5'>
                    <div className='flex flex-wrap gap-x-6 gap-y-0 -mx-[0.75rem]'>
                        <div className='m-auto md:w-[75%]'>
                            <div className='mb-14 text-center '>
                                <h2 className=' sm:text-3xl text-2xl md:text-4xl  mb-0 font-bold'>Find Best Medical Care Consultation Near You</h2>

                            </div>
                            <div className='flex flex-wrap mt-[-16px] mr-[-8px] ml-[-8px]'>
                                {cards.map((data) => (
                                    <div key={data.id} className="mb-4 flex-shrink-0 w-full max-w-full pr-[calc(var(--gutter-x)*.5)] pl-[calc(var(--gutter-x)*.5)] mt-[var(--gutter-y)]
lg:flex-none lg:w-1/3"
                                    >
                                        <div className='relative max-w-full mx-auto shadow-[0_3px_20px_#0000000b] overflow-hidden border-[#f0f0f0] mb-[1.875rem] text-center  flex flex-col min-w-0 break-words bg-white bg-clip-border border border-[rgba(0,_0,_0,_0.125)] rounded-[0.25rem]'>
                                            <img src={data.img} className='align-middle rounded-sm transition-all duration-2000 ease-[cubic-bezier(.19,1,.22,1)] max-w-full h-auto' alt="" />
                                            <div className='bg-[rgba(13,13,13,.33)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#f1f1f1] w-full p-5 h-full rounded-sm'>
                                                <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                                    <h3 className='text-white text-shadow-[2px_4px_3px_rgba(0,0,0,.3)] text-base mb-3  font-semibold'> {data.title}</h3>
                                                    <button className='<bg-[#0de0fe] border-2 border-[#0de0fe] text-white text-[16px] font-medium py-[6px] px-[10px] transition-all duration-500 shadow-[inset_0_0_0_0_#01cae4] text-center rounded-[5px] min-w-[110px]  bg-[#0de0fe] '>{data.btntext}</button>

                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                ))}

                            </div>

                        </div>


                    </div>

                </div>
            </section>


        </div>
    )
}

export default First
