import mehr from "../assets/doctor.webp";
const Description = () => {
  return (
    <div className=" bg-gray-100 flex flex-col mt-[-200px]">
      {/* Header */}
      <header className="bg-succes text-white max-xs:p-4 p-6 text-center">
        <h1 className="text-4xl max-xxl:text-2xl font-extrabold">
          Biz Haqimizda
        </h1>
      </header>
      {/* Main Content */}
      <div
        className="flex max-xxl:flex-col w-[90%] m-auto mt-[50px] mb-[50px] rounded-lg 
      shadow-2xl  overflow-hidden 
      transition-transform transform  
      justify-between "
      >
        <div className="">
          <img src={mehr} className="rounded-lg" />
        </div>
        <div className="w-1/2 max-xxl:w-[90%] m-auto text-[25px] max-xxl:text-[18px]">
          1992- yildan buyon xalqimiz xizmatida bo‘lgan Mehrigiyo korxonasining
          tabiiy shifobaxsh mahsulotlari ma'lum va mashxur Mahsulotimiz
          Xalqimizga hamda qo‘shni davlatlar Rossiya, Qirg‘iziston, Qozog‘iston,
          Amerika, Saudiya Arabistoni , Tojikiston va boshqa ko‘plab davlatlarga
          yetkazib berilyabdi va o‘z mijozlari ishonchini oqlab kelmoqda!
        </div>
      </div>
    </div>
  );
};
export default Description;
