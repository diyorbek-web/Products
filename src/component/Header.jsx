import { FaGlobe, FaPhone, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import HeaderForm from "./HeaderForm";

const Header = () => {
  return (
    <div className="flex max-xxl:flex-col justify-between w-full bg-succes h-[150px] max-sm:h-[220px] text-white p-8">
      <HeaderForm className="max-xs:m-auto" />
      <div className="text-center">
        <h1 className="text-4xl max-sm:text-[25px] max-xs:text-[20px] font-extrabold mb-4">
          Mahsulotlarimiz
        </h1>
        <div className="flex max-xxl:mt-[-20px] justify-center mb-4 sm:mb-0">
          <p className="text-lg max-xs:text-[16px]">
            O'zingizga mos eng yaxshi mahsulotlarni tanlang
          </p>
        </div>
      </div>

      <div className="flex flex-col max-xxl:mt-[-20px] sm:flex-row items-center justify-between p-4">
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
          <a
            href="tel:+998787773103"
            className="text-[18px] text-white hover:text-yellow transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone className="text-[18px] hover:text-yellow transition" />
          </a>
          <a
            href="https://t.me/mehrigiyo_1992"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] text-white hover:text-yellow transition"
          >
            <FaTelegramPlane className="text-[18px] hover:text-yellow transition" />
          </a>
          <a
            href="https://www.instagram.com/mehrigiyo.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] text-white hover:text-yellow transition"
          >
            <FaInstagram className="text-[18px] hover:text-yellow transition" />
          </a>
          <a
            href="https://mehrigiyo.uz/uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] text-white hover:text-yellow transition"
          >
            <FaGlobe className="text-[18px] hover:text-yellow transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
