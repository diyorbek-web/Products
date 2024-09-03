/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import doctorali from "../assets/doctorali.png";
import mehrigiyo from "../assets/mehrigiyologo.png";

const HeaderForm = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  const newLocal = (
    <img
      src={doctorali}
      alt="First Image"
      className="w-[100px] max-xs:w-[80px] m-auto object-cover animate-rotate-y cursor-pointer"
    />
  );
  return (
    <div className="w-[300px] max-xxl:w-[200px] max-xs:w-auto max-xxl:mt-[-20px] max-xxl:m-auto ml-[-60px] bg-succes relative h-[100px] ">
      <FaLeaf
        color="#3E8E36"
        className="text-[80px] max-xs:text-[60px] max-xxl:text-[50px] max-xxl:ml-[70px] mt-7 max-xs:mt-3 max-xs:ml-[0px] ml-8"
      />
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showFirstImage ? "opacity-100" : "opacity-0"
        }`}
      >
        {newLocal}
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showFirstImage ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={mehrigiyo}
          alt="Second Image"
          className="w-[200px] max-xs: max-xs:w-[150px] m-auto object-cover animate-rotate-y cursor-pointer"
        />
      </div>
    </div>
  );
};
export default HeaderForm;
