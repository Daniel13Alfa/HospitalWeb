import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Button from "@mui/material/Button";
import viteLogo from "/vite.svg";
import TextField from "@mui/material/TextField";

import { TableHospitales } from "../tables/TableHospitales";

const Hospitales = () => {
  const [allHospitales, setAllHospitales] = useState([]);
  const [hospital, setHospital] = useState("");
  const [casos, setCasos] = useState("");

  const insertHospital = async () => {
    const params = {
      nombre_hospital: hospital,
      num_casos: casos,
    };
    try {
      const response = await axios.post(
        "https://nodeapi-latest.onrender.com/insertHospital",
        {
          params,
        }
      );
      getHospitales();
    } catch (err) {
      console.log(err);
    }
  };

  const getHospitales = async () => {
    try {
      const response = await axios.get(
        "https://nodeapi-latest.onrender.com/hospitales"
      );
      setAllHospitales(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHospitales();
    return () => {};
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <Header />
        <div className="content bg-blue-50 flex">
          <div className="info w-full p-7">
            <h1 className="font-bold text-2xl">Hospitals</h1>
            <div className="CardInfo w-12/12 bg-white mt-8 rounded-xl">
              <div className="Cardheadr bg-blue-500 text-white rounded-t-xl">
                <h1 className="p-4">Create and search Hospitals</h1>
              </div>
              <div className="CardConten p-6">
                <div className="dates mb-6 flex justify-between items-center">
                  <h1 className="w-1/12 text-sm text-black">Hospital Name</h1>
                  <TextField
                    required
                    id="outlined-required"
                    className="w-3/12"
                    onChange={(ev) => setHospital(ev.target.value)}
                  />
                  <h1 className="w-1/12 text-sm text-black">Cases Number</h1>
                  <TextField
                    required
                    id="outlined-required"
                    type="number"
                    className="w-3/12"
                    onChange={(ev) => setCasos(ev.target.value)}
                  />
                </div>
                <Button variant="contained" onClick={insertHospital}>
                  CREATE
                </Button>
                <br></br>
                <br></br>
                {Object.keys(allHospitales).length !== 0 ? (
                  <TableHospitales tablebody={allHospitales} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitales;
