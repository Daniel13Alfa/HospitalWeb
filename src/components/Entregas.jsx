import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

import { TableEntregas } from "../tables/TableEntregas";

const Entregas = () => {
  const [allEntregas, setAllEntregas] = useState([]);

  const getEntregas = async () => {
    try {
      const response = await axios.get(
        "https://nodeapi-latest.onrender.com/entregas"
      );
      setAllEntregas(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEntregas();
    return () => {};
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <Header />
        <div className="content bg-blue-50 flex text-gray-600">
          <div className="info w-full p-7">
            <h1 className="font-bold text-2xl uppercase">Deliveries</h1>
            <div className="CardInfo w-12/12 bg-white mt-8 rounded-xl">
              <div className="Cardheadr bg-blue-500 text-white rounded-t-xl">
                <h1 className="p-4">Deliveries details</h1>
              </div>
              <div className="CardConten p-6">
                <div className="tienda mb-6 flex justify-between items-center"></div>
                <br></br>
                {Object.keys(allEntregas).length !== 0 ? (
                  <TableEntregas tablebody={allEntregas} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entregas;
