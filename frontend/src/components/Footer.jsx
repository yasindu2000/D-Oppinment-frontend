import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side  */}
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* middle side  */}
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Delivery</li>
            <li className="">Privacy policy</li>
          </ul>
        </div>

        {/* right side  */}
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">+0-000-000-000</li>
            <li className="">healthcare@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright text  */}
      <div className="">
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2025 @ HealthCare - All Right Reserved.</p>

      </div>
    </div>
  );
}

export default Footer;
