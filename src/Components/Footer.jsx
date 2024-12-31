import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const bottom = [
    {
        id: 1,
        head: "For Patients",
        para: "Search for Doctors",
    },
    {
        id: 2,
        para: "Login",
        head: "For Doctors",
    },
    {
        id: 3,
        head: "Contact Us",
        para: " +91 959 900 5673"
    }
]

const Footer = () => {
    return (
        <footer className='pt-7 pb-0 bg-[#15558d]'>
        <div className='py-10'>
          <div className='px-7 md:px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* Logo and About Section */}
              <div>
                <div className='mb-8'>
                  <img src="/Images/footer-logo.webp" alt="Vinshealth Logo" />
                  <p className='text-white mb-5'>
                    Vinshealth is a one-stop solution for your health-related needs. We serve you the services of general physicians, urologists, neurologists, and all other doctors across the country-India. We help you live healthier and longer.
                  </p>
                  <div className='mt-4'>
                    <ul className='flex space-x-4'>
                      <li>
                        <a href="https://www.facebook.com/VinsHealthcare/" className='text-white hover:text-blue-500'>
                          <GrFacebookOption aria-label="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/VinsHealthcare/" className='text-white hover:text-blue-500'>
                          <BiLogoInstagramAlt aria-label="Instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
      
              {/* Dynamic Footer Columns */}
              {bottom.map((t2) => (
                <div key={t2.id}>
                  <div className="mt-5">
                    <h2 className="text-lg md:text-lg font-semibold text-white mb-2.5">
                      {t2.head}
                    </h2>
                    <ul className="list-none m-0 p-0">
                      <li className="mb-2.5">
                        <a
                          className="text-white text-base pl-2 transition duration-400 ease-in-out hover:text-blue-600"
                          href="https://www.vinshealth.com/doctors"
                        >
                          <i className="absolute left-0 top-0 mr-1">
                            <MdKeyboardDoubleArrowLeft />
                          </i>
                          {t2.para}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
        {/* Bottom Section */}
        <div className='px-6 py-8'>
          <div className='flex flex-wrap justify-between items-center'>
            <p className='text-white text-sm'>
              © 2024 Vinshealth. All rights reserved.
            </p>
            <ul className='text-sm m-0 p-0 flex space-x-4'>
              <li>
                <a href="https://www.vinshealth.com/terms-and-conditions" className='text-white'>
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="https://www.vinshealth.com/privacy-policy" className='text-white'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
    );
}

export default Footer;

