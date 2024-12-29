"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ChevronDown } from "lucide-react";

export default function Section1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.service ||
      !formData.message ||
      !formData.phoneNumber
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          message: "",
          phoneNumber: "",
        });
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[85%] m-auto min-h-[500px] bg-black h-fit pt-[140px] pb-[50px]">
      <div className="text-center">
        <div className="unique-text text-[30px] md:text-[50px] font-bold">
          Get in Touch with Us
        </div>
        <div className="text-[#6E6E6E] text-[15px] md:text-[20px] font-normal">
          We're here to help, anytime you need us.
        </div>
      </div>
      <div>
        <div className=" nav-bg  gap-[20px] flex flex-col justify-center p-[15px] md:p-[25px] sm:min-w-[400px] w-[100%] sm:w-[60%] m-auto border-[1px] border-[#36363683] min-h-[500px] h-fit rounded-[10px] mt-[50px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[30px] text-[#9e9e9e]"
          >
            <div className="flex flex-col sm:flex-row justify-between w-full gap-[30px]">
              <div className="flex flex-col w-full gap-[8px]">
                <label htmlFor="">First Name</label>
                <input
                  placeholder="Alex"
                  className="text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px]"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full gap-[8px]">
                <label htmlFor="">Last Name</label>
                <input
                  placeholder="Mercer"
                  className="text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px]"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-[8px]">
              <label htmlFor="">Email</label>
              <input
                placeholder="glint4u@gmail.com"
                className="text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px]"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-[8px]">
              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                placeholder="9234567890"
                className="text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px]"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-[8px] relative">
              <label htmlFor="">What service are you interested in?</label>
              <select
                className="text-[16px] appearance-none border-[#ffffff4c] text-[#ffffff89] focus:border-[#ffffff8e] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px]"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Select a service">Select a service</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Static Website Development">
                  Static Website Development
                </option>
                <option value="Dynamic Website Development">
                  Dynamic Website Development
                </option>
                <option value="API Development">API Development</option>
                <option value="DevOps">DevOps</option>
                <option value="SEO">SEO</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Web Hosting">Web Hosting</option>
              </select>
              <div className="absolute right-[15px] top-[47px]">
                <ChevronDown size={20} />
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="">Your Message</label>
              <textarea
                className="text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none rounded-[8px] p-[10px] resize-none"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`text-[16px] border-[#ffffff4c] hover:bg-white/90 hover:text-black duration-350 transition-all  border-[1px] md:text-[18px] flex justify-center items-center h-[50px] rounded-[8px] w-full mx-auto bg-[#18181A] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? <div className="loader"></div> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
