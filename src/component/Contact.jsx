import Map from "../component/Map";
import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa"; // Import the icon

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(""); // Error state
  const [success, setSuccess] = useState(false); // Success state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validatsiyasi
    if (!name || !phone) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      console.log("Form invalid"); // Debugging
      return;
    }

    const token = "7409721677:AAFWLTjkNfRkNJ1ypwsP5DqXDjq88-hrsek";
    const chatId = "-1002151307536"; // Foydalanuvchi yoki guruh chat ID sini o'zgartiring
    const message = `Name: ${name}\nPhone: ${phone}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });

      // Formani tozalash va muvaffaqiyat holatini o‘rnatish
      setName("");
      setPhone("");
      setError(""); // Errorni tozalash
      setSuccess(true);

      // Success holatini vaqtinchalik ko‘rsatish
      setTimeout(() => setSuccess(false), 3000); // 3 sekunddan so‘ng muvaffaqiyatni tozalash
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Xatolik yuz berdi, xabar yuborilmadi.");
    }
  };

  return (
    <div className="relative justify-between bg-succes pt-5 shadow-lg pb-2">
      {/* Success holatini ko‘rsatish */}
      {success && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-10">
          <FaCheckCircle color="#3E8E36" className="text-white text-4xl mb-2" />{" "}
          {/* Icon */}
          <p className="text-white text-xl">Yuborildi</p>
        </div>
      )}

      {/* Error holatini ko‘rsatish */}
      {error && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <p className="text-white text-xl">{error}</p>
        </div>
      )}

      <h2 className="text-4xl max-xxl:text-2xl text-center text-yellov font-bold mb-4 text-white">
        Biz bilan bog'lanish
      </h2>
      <div className="w-[100%] m-auto max-xxl:w-[90%] flex max-xxl:flex-col">
        <div className="w-[50%] max-xxl:m-auto flex justify-center mt-10">
          <div className="flex justify-between p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="m-auto">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 outline-none h-[40px] block max-xxl:w-[300px] max-xs:h-[25px] max-xs:w-[200px] w-[400px] focus:border-none rounded-md shadow-sm sm:text-sm"
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
                  className="mt-1 outline-none h-[40px] m-auto block w-[400px] rounded-md shadow-sm sm:text-sm max-xxl:w-[300px] max-xs:h-[25px] max-xs:w-[200px]"
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
