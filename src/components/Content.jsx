import React from "react";

const Content = () => {
  return (
    <div className="pt-5 pb-20 min-h-full bg-white">
      <div className="text-center hero-content flex-col lg:flex-row-reverse">
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/premium-photo/blue-white-building-hospital-with-blue-cross-top_1181531-471.jpg?w=740"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Hospitals
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/premium-photo/cartoon-hospital-bed-with-blue-blanket-pillow-generative-ai_958108-56069.jpg?w=740"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Supplies
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/free-vector/health-professional-team-concept-illustration_114360-1628.jpg?t=st=1718757855~exp=1718761455~hmac=363e02ba5869fee1d10d596c60919a8147407b002ef6b754db7e4ee5d258c740&w=740"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Request
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-black">
            HOSPITALS ADMINITRATION
          </h1>
          <p className="py-6 text-justify text-black">
            Welcome to hospitals administration, this is a portal web to
            administrate hospital supplies.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
