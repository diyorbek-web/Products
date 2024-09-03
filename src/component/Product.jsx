import rasmOne from "../assets/doctor.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // CSS faylni import qilish

const Product = () => {
  const items = [
    {
      img: rasmOne,
      name: "Mahsulot 1",
      description: "Mahsulot tavsifi, narx yoki boshqa ma'lumotlar",
    },
    {
      img: rasmOne,
      name: "Mahsulot 2",
      description: "Mahsulot tavsifi, narx yoki boshqa ma'lumotlar",
    },
    {
      img: rasmOne,
      name: "Mahsulot 3",
      description: "Mahsulot tavsifi, narx yoki boshqa ma'lumotlar",
    },
    {
      img: rasmOne,
      name: "Mahsulot 4",
      description: "Mahsulot tavsifi, narx yoki boshqa ma'lumotlar",
    },
    {
      img: rasmOne,
      name: "Mahsulot 5",
      description: "Mahsulot tavsifi, narx yoki boshqa ma'lumotlar",
    },
    {
      img: rasmOne,
      name: "Mahsulot 6",
      description: "Mahsulot tavsifi, narx yoki boshqa ma'lumotlar",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 1000, // 2 soniya
    pauseOnHover: true, // Hover holatida pauza
    responsive: [
      {
        breakpoint: 768, // Ekran kengligi 768px yoki kichik bo'lganda
        settings: {
          slidesToShow: 1, // Faqat bitta slayd ko'rsatish
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center flex-col">
      {/* Header */}

      {/* Main Content */}
      <div className="w-[70%] max-xs:w-[83%] mt-[-200px]  max-w-4xl mx-auto py-8">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              key={index}
              className=" max-w-[300px] max-xs:max-w-[230px]  m-4 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                className="w-[200px] h-[200px] object-cover"
                src={item.img}
                alt={item.name}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="bg-success text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
                  Ko'proq Ma'lumot
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
