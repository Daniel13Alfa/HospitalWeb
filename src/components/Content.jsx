import React from "react";

const Content = () => {
  return (
    <div className="hero min-h-full dark:bg-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          src="https://w0.peakpx.com/wallpaper/988/361/HD-wallpaper-landscape-city-vertical-sky-clouds-sunlight-dark-palm-trees-urban-street-lantern-blue-orange.jpg"
          width="300"
        />
        <div>
          <h1 className="text-5xl font-bold ">
            PANNEL PARA LA ADMINISTRACION DE INSUMOS MEDICOS
          </h1>
          <p className="py-6">
            El objetivo de este pannel es llevar un control del inventario con
            el que se cuenta referente a los insumos medicos
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
