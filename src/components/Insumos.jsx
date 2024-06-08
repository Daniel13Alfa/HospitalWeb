import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Button from "@mui/material/Button";
import viteLogo from "/vite.svg";
import TextField from "@mui/material/TextField";

import { TableInsumos } from "../tables/TableInsumos";

const Insumos = () => {
  const [allInsumos, setAllInsumos] = useState([]);
  const [insumo, setInsumo] = useState("");

  const insertInsumo = async () => {
    const params = {
      nombre_insumo: insumo,
    };
    try {
      const response = await axios.post(
        "https://nodeapi-latest.onrender.com/insertInsumo",
        {
          params,
        }
      );
      getInsumos();
    } catch (err) {
      console.log(err);
    }
  };

  const getInsumos = async () => {
    try {
      const response = await axios.get(
        "https://nodeapi-latest.onrender.com/insumos"
      );
      setAllInsumos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInsumos();
    return () => {};
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <Header />
        <div className="content bg-blue-50 flex">
          <div className="info w-full p-7">
            <h1 className="font-bold text-2xl">
              Insumos <span>Hospital </span>
            </h1>
            <div className="CardInfo w-12/12 bg-white mt-8 rounded-xl">
              <div className="Cardheadr bg-blue-500 text-white rounded-t-xl">
                <h1 className="p-4">Consulta y creacion de Insumos</h1>
              </div>
              <div className="CardConten p-6">
                <div className="w-6/12 m-1 mb-3 flex justify-between items-center">
                  <h1 className="w-3/6 text-sm text-black">Nombre Insumo</h1>
                  <TextField
                    required
                    id="outlined-required"
                    onChange={(ev) => setInsumo(ev.target.value)}
                    className="w-3/6"
                  />
                </div>
                <div className="m-1 mb-3 flex justify-between items-center">
                  <Button variant="contained" onClick={insertInsumo}>
                    CREAR
                  </Button>
                </div>
                <br></br>
                {Object.keys(allInsumos).length !== 0 ? (
                  <TableInsumos tablebody={allInsumos} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Insumos;
