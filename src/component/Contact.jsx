import React, { useState } from "react";
import Map from "./Map";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerda forma ma'lumotlarini qayta ishlashni amalga oshiring
    console.log("Name:", name);
    console.log("Phone:", phone);
  };
  return (
    <div className="justify-between  bg-succes pt-5 shadow-lg ">
      <h2 className="text-4xl max-xxl:text-2xl text-center text-yellov font-bold mb-4 text-white">
        Biz bilan bog'lanish
      </h2>
      <div className="w-[100%] m-auto max-xxl:w-[90%] flex max-xxl:flex-col">
        <div className="w-[50%] max-xxl:m-auto flex justify-center mt-10">
          <div className="flex  justify-between  p-4 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="m-auto">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 outline-none h-[40px] block max-xxl:w-[300px] max-xs:h-[25px] max-xs:w-[200px] w-[400px] focus:border-none rounded-md shadow-sm   sm:text-sm"
                  required
                  placeholder="Ismingiz"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 outline-none h-[40px] m-auto block w-[400px] rounded-md shadow-sm  sm:text-sm max-xxl:w-[300px] max-xs:h-[25px] max-xs:w-[200px]"
                  required
                  placeholder="Telefen raqamingiz"
                />
              </div>
              <button
                type="submit"
                className="w-[400px] py-2 px-4 bg-yellow max-xxl:w-[300px] max-xs:h-[25px] max-xs:w-[200px] text-white font-bold rounded-md shadow-sm hover:bg-[#c48d20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-[50%] max-sm:w-[100%] max-md:m-auto flex justify-center">
          <Map />
        </div>
      </div>
    </div>
  );
};
export default Contact;
