import React from 'react'
import { CiClock2 } from "react-icons/ci";

const categories = [
    {
        title: "Psychotherapist",
        cities: [
            { name: "Delhi", url: "https://www.vinshealth.com/delhi/psychotherapist" },
            { name: "Mumbai", url: "https://www.vinshealth.com/mumbai/psychotherapist" },
            { name: "Kolkata", url: "https://www.vinshealth.com/kolkata/psychotherapist" },
            { name: "Bangalore", url: "https://www.vinshealth.com/bangalore/psychotherapist" },
            { name: "Chennai", url: "https://www.vinshealth.com/chennai/psychotherapist" },
            { name: "Hyderabad", url: "https://www.vinshealth.com/hyderabad/psychotherapist" },
            { name: "Pune", url: "https://www.vinshealth.com/pune/psychotherapist" },
        ],
    },
    {
        title: "Psychiatrist",
        cities: [
            { name: "Delhi", url: "https://www.vinshealth.com/delhi/psychiatrist" },
            { name: "Mumbai", url: "https://www.vinshealth.com/mumbai/psychiatrist" },
            { name: "Kolkata", url: "https://www.vinshealth.com/kolkata/psychiatrist" },
            { name: "Bangalore", url: "https://www.vinshealth.com/bangalore/psychiatrist" },
            { name: "Chennai", url: "https://www.vinshealth.com/chennai/psychiatrist" },
            { name: "Hyderabad", url: "https://www.vinshealth.com/hyderabad/psychiatrist" },
            { name: "Pune", url: "https://www.vinshealth.com/pune/psychiatrist" },
        ],
    },
    {
        title: "Dermatologist",
        cities: [
            { name: "Delhi", url: "https://www.vinshealth.com/delhi/dermatologist" },
            { name: "Mumbai", url: "https://www.vinshealth.com/mumbai/dermatologist" },
            { name: "Kolkata", url: "https://www.vinshealth.com/kolkata/dermatologist" },
            { name: "Bangalore", url: "https://www.vinshealth.com/bangalore/dermatologist" },
            { name: "Chennai", url: "https://www.vinshealth.com/chennai/dermatologist" },
            { name: "Hyderabad", url: "https://www.vinshealth.com/hyderabad/dermatologist" },
            { name: "Pune", url: "https://www.vinshealth.com/pune/dermatologist" },
        ],
    },
    {
        title: "Dentist",
        cities: [
            { name: "Delhi", url: "https://www.vinshealth.com/delhi/dentist" },
            { name: "Mumbai", url: "https://www.vinshealth.com/mumbai/dentist" },
            { name: "Kolkata", url: "https://www.vinshealth.com/kolkata/dentist" },
            { name: "Bangalore", url: "https://www.vinshealth.com/bangalore/dentist" },
            { name: "Chennai", url: "https://www.vinshealth.com/chennai/dentist" },
            { name: "Hyderabad", url: "https://www.vinshealth.com/hyderabad/dentist" },
            { name: "Pune", url: "https://www.vinshealth.com/pune/dentist" },
        ],
    },
    {
        title: "Gynecologist",
        cities: [
            { name: "Delhi", url: "https://www.vinshealth.com/delhi/gynecologist" },
            { name: "Mumbai", url: "https://www.vinshealth.com/mumbai/gynecologist" },
            { name: "Kolkata", url: "https://www.vinshealth.com/kolkata/gynecologist" },
            { name: "Bangalore", url: "https://www.vinshealth.com/bangalore/gynecologist" },
            { name: "Chennai", url: "https://www.vinshealth.com/chennai/gynecologist" },
            { name: "Hyderabad", url: "https://www.vinshealth.com/hyderabad/gynecologist" },
            { name: "Pune", url: "https://www.vinshealth.com/pune/gynecologist" },
        ],
    },
    {
        title: "Orthopedic",
        cities: [
            { name: "Delhi", url: "https://www.vinshealth.com/delhi/orthopedic" },
            { name: "Mumbai", url: "https://www.vinshealth.com/mumbai/orthopedic" },
            { name: "Kolkata", url: "https://www.vinshealth.com/kolkata/orthopedic" },
            { name: "Bangalore", url: "https://www.vinshealth.com/bangalore/orthopedic" },
            { name: "Chennai", url: "https://www.vinshealth.com/chennai/orthopedic" },
            { name: "Hyderabad", url: "https://www.vinshealth.com/hyderabad/orthopedic" },
            { name: "Pune", url: "https://www.vinshealth.com/pune/orthopedic" },
        ],
    },
];

const cards = [
    {
        id: 1,
        img: "/Images/Card1.webp",
        img1: "/Images/dr-nisha-sharma.webp",
        title: "Dr. Nisha Sharma",
        t1: " 2023-09-25",

        title2: "Difference Between Obstetrician and Gynecologist",
        para: "Obstetrics and gynecology, often shortened to OB/GYN, are two branches of medicin",

    },
    {
        id: 2,
        img: "/Images/Card2.webp",
        img1: "/Images/dr-nisha-sharma.webp",
        title: "Dr. Mehak Mitra",
        t1: "2024-12-09",

        title2: "Guaranteed Surrogacy in India | Surrogacy Cost in India - Vinshealth",
        para: "Surrogacy",

    },
    {
        id: 3,
        img: "/Images/Card3.webp",
        img1: "/Images/dr-nisha-sharma.webp",
        title: "Dr. Mehak Mitra",
        t1: " 2023-07-24",

        title2: "what is Orthopedics: Importance Benefits",
        para: "Table of content ",

    },
    {
        id: 4,
        img: "/Images/Card4.webp",
        img1: "/Images/dr-nisha-sharma.webp",
        title: "Dr. Aayush Mittal",
        t1: " 2023-09-26",

        title2: "What is Laparoscopy, Purpose, Procedure and Benefits",
        para: "In the realm of modern medicine, laparoscopy stands as a revolutionary technique ",

    },

]

const Blogs = () => {
    return (
        <>
            <section className='bg-[#f8f9fa] py-20"'>
                <div className='px-7 mx-auto w-full'>
                    <div className='mb-16 text-center'>
                        <h2 className='sm:text-3xl text-2xl md:text-4xl mb-0 font-bold'>
                            Blogs and News
                        </h2>
                        <p className='text-[#757575] text-base sm:text-lg mt-3 max-w-3xl mx-auto'>Get news updates and seek the help from our expert writers. Make good health practice with us !</p>

                    </div>
                    <div className='flex flex-wrap mt-[-0.375rem] -mr-[0.75rem] -ml-[0.75rem]'>
                        {cards.map((d2) => (


                            <div className='flex-shrink-0 w-full lg:w-1/4 md:w-1/2 sm:w-full px-[calc(var(--bs-gutter-x)*0.5)] mt-[var(--bs-gutter-y)]'>

                                <div className='p-5' key={d2.id}>
                                    <div className='mb-8 overflow-hidden'>
                                        <a href="https://www.vinshealth.com/blog/what-is-the-difference-between-obstetrician-and-gynecologist" className='transition-all duration-400 outline-none no-underline text-[#2e3842]'>
                                            <img src={d2.img} className='max-w-full h-auto' alt="" />
                                        </a>
                                    </div>
                                    <div className='relative'>

                                        <ul className='entry-meta text-[#757575] text-sm mb-3 flex items-center justify-between flex-wrap p-0'>
                                            <li className='inline-block mr-3'> <div className='w-[189px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                                <a href="" className=' flex transition duration-400 ease-in-out text-[#20c0f3] hover:no-underline focus:outline-none active:outline-none'>
                                                    <img src={d2.img1} className='rounded-full w-[28px] flex-shrink-0 mr-[5px]' alt="" />
                                                    <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{d2.title}</span>
                                                </a>
                                            </div>
                                            </li>
                                            <li className=' flex items-center mt-3 mr-4 '>
                                                <i className='text-xs'><CiClock2 /></i>
                                                {d2.t1}
                                            </li>
                                        </ul>
                                        <h3 className='md:text-xl xsm:text-base text-[#272b41] font-medium'>
                                            <a href="https://www.vinshealth.com/blog/what-is-the-difference-between-obstetrician-and-gynecologist" className='text-[#272b41] hover:no-underline focus:no-underline active:no-underline transition duration-400'>
                                                {d2.title2}


                                            </a>

                                        </h3>
                                        <p className='text-[#666] md:text-sm xsm:text-xs mb-[30px]'>
                                            {d2.para}
                                        </p>


                                    </div>
                                </div>
                            </div>))}

                    </div>
                    <div className=' my-12 text-center'>
                        <a href="" className='inline-block md:font-semibold xsm:font-normal md:text-[16px]  xsm:text-sm xsm:py-1 xsm:px-3 md:py-[12px] px-[30px] text-white bg-[#09e5ab] border-[2px] border-[#09e5ab] shadow-[inset_0_0_0_0_#fff] transition-all duration-500 ease-in-out rounded'>
                            View all

                        </a>
                    </div>
                </div>

            </section>
            <hr />
            <div className='my-14 px-8 md:px-12'>
                <div className='row flex flex-wrap -mt-6 -mr-3.5 -ml-3.5'>
                    <div className='col-md-12 md:flex-0 md:w-full'>
                        <div className='footer-widget p-5 bg-gray-100 rounded-lg'>
                            <span className='sm:text-xl text-lg md:text-2xl mb-0 font-bold'> Consult Top Doctors in Your City Near You</span>
                            <div className='flex flex-wrap mt-5 -mr-[0.75rem] -ml-[0.75rem]'>
                                {categories.map((category, index) => (
                                    <div className='w-full md:w-2/12' key={index}>
                                        <ul className='text-white  mr-2'>
                                            {category.cities.map((city, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        title={`${category.title} in ${city.name}`}
                                                        href={city.url}
                                                        className='text-blue-600 underline hover:text-blue-800'
                                                    >
                                                        <h3 className='text-xs sm:text-sm font-medium text-gray-800 my-2'>
                                                            {`${category.title} in ${city.name}`}
                                                        </h3>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default Blogs
