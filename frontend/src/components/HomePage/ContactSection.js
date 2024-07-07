import React from "react";

const ContactSection = () => {
  return (
    <div className="flex bg-cyan-200 py-[58px] px-[192px]">
      <div className="flex-1 text-start self-center text-4xl tracking-wide pb-12 text-cyan-900 font-normal">Connect with us</div>

      <div className="w-full flex-1 grid">

        <div className="w-[80%] min-w-[508px] justify-self-end">
          <h2 className="font-bold text-[28px] tracking-wide  mb-4">
            Contact Us
          </h2>
          <form action="#" className="text-[#00677F] text-[20px]">
            <div className="flex justify-between mb-[24px]">
              <label htmlFor="name" className="font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="bg-transparent w-[65%] border-[#00677F] border-[thin] p-1 outline-none self-start"
              />
            </div>
            <div className="flex justify-between mb-[24px] ">
              <label htmlFor="email" className="font-medium">Mail ID</label>
              <input
                type="email"
                id="email"
                className="bg-transparent w-[65%] border-[#00677F] border-[thin] p-1 outline-none"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea
                type="text"
                id="message"
                className="bg-transparent  w-[65%] border-[#00677F] border-[thin] h-28 p-1 outline-none self-start"
              />
            </div>
            <div className="flex justify-end">
              <input type="submit" className="mt-[48px] bg-[#00677F] rounded-[4px] px-[50px] py-[5px] text-[#F7F131] font-medium" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;