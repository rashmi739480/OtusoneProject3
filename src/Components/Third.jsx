import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import { cards } from '../data/ThirdData';
const Third = () => {
    return (
        <section className='bg-gray-100 py-20'>
            <div className="w-full mx-auto px-8 md:px-5 lg:px-7">
                <div className="flex flex-wrap -mx-6">
                    {/* Left Section: To Consult Our Doctors */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 mt-4">
                        <div className="mb-12">
                            <h2 className="sm:text-3xl text-2xl md:text-4xl mb-0 font-bold">
                                To Consult Our Doctors
                            </h2>
                            <p className="text-[#757575] text-base sm:text-lg mt-3 max-w-3xl mx-auto">
                                Private online consultation with verified doctors.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-normal leading-6 m-0">
                                Finding a doctor can be troublesome, especially in the time of need. We help you with the easy availability of the doctors, their sitting addresses, their phone numbers, and the other contact details.
                            </p>
                            <p className="text-sm font-normal leading-6 m-0 mt-5">
                                We help you with everything that you may require to fulfill your need for medical queries. Whether it is about finding nearby pharmacies, hospitals, doctors or any specialist, we help you with all of them.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-[#0de0fe] text-white text-base font-medium rounded-[4px] mt-8 min-w-[150px] px-5 py-4 shadow-[inset_0_0_0_0_#01cae4] text-center transition-all duration-400 hover:no-underline focus:no-underline active:no-underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Right Section: Doctor Image (Cards) */}
                    <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 px-6 mt-4">
                        <div className="overflow-x-auto w-full">
                            <div className="flex items-start space-x-4 px-4 py-3">
                                {cards.map((data) => (
                                    <div key={data.id} className="profile-widget bg-white border border-[#f0f0f0] rounded-lg shadow-lg transition-all duration-300 p-5 mb-6 w-[300px]">
                                        <div className="relative overflow-hidden z-10 rounded-lg">
                                            <a href="">
                                                <img
                                                    className="object-cover h-52 w-full rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                                                    src={data.img1}
                                                    alt="Doctor Image"
                                                />
                                            </a>
                                        </div>

                                        <div className='py-4'>
                                            <h3 className='text-lg font-semibold flex items-center mb-2'>
                                                <a href="https://www.vinshealth.com/delhi/psychologist/defence-colony/shivani-misri-sadhoo">
                                                    {data.heading}
                                                </a>
                                                <i className='text-[#28a745] ml-1'>
                                                    <RiVerifiedBadgeFill />
                                                </i>
                                            </h3>
                                            <p className='text-sm text-[#757575] mb-1 min-h-[40px]'>
                                                {data.para}
                                            </p>
                                            <div className="flex items-center text-[#757575] text-sm mb-3">
                                                {/* Render 5 star icons */}
                                                {Array(5).fill().map((_, index) => (
                                                    <i key={index} className="text-[#dedfe0] font-black">
                                                        <IoIosStar />
                                                    </i>
                                                ))}
                                                <span className="ml-2">(0)</span>
                                            </div>

                                            <ul className='text-[#757575] text-sm mb-5'>
                                                <li className='flex items-center mb-1'>
                                                    <i className='w-6'>
                                                        <IoLocationSharp />
                                                    </i>
                                                    {data.t1}
                                                </li>
                                                <li className='flex items-center mb-1'>
                                                    <i className='w-6'>
                                                        <IoLocationSharp />
                                                    </i>
                                                    {data.t2}
                                                </li>
                                            </ul>

                                            <div className="flex gap-4 mt-4">
                                                <div className="w-full  sm:w-1/2 px-1">
                                                    <a
                                                        href="https://www.vinshealth.com/delhi/psychologist/defence-colony/shivani-misri-sadhoo"
                                                        className="bg-white text-[#0de0fe] border-2 border-[#0de0fe] rounded-lg text-sm font-semibold text-center px-6  block transition-all duration-300 hover:bg-[#0de0fe] hover:text-white hover:shadow-lg h-12"
                                                    >
                                                        View Profile
                                                    </a>
                                                </div>
                                                <div className="w-full  sm:w-1/2 px-1">
                                                    <a
                                                        href="https://www.vinshealth.com/delhi/psychologist/defence-colony/shivani-misri-sadhoo"
                                                        className="bg-[#0de0fe] text-white border-2 border-[#0de0fe] rounded-lg text-sm font-semibold text-center px-6 block transition-all h-12 duration-300 hover:bg-[#028ab1] hover:shadow-lg"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Third
